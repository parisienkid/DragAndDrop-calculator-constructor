import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { setCurrentItemId, setCurrentItemPosition, addItem, sortItems } from '../../core/reducers/sortSlice';
import deleteCurrentItem from '../../core/utils/deleteCurrent';
import makeItem from '../../core/utils/makeItem';
import './wrapper.sass';

interface ItemWrapperProps {
    children: React.ReactNode | React.ReactElement,
    id: number,
    left?: boolean,
    position: number
}

const ItemWrapper: FC<ItemWrapperProps> = ({children, id, left, position}) => {

    const {currentItemId} = useSelector((state: RootState) => state.sort)
    const {currentItemPosition} = useSelector((state: RootState) => state.sort)
    const {calcItems} = useSelector((state: RootState) => state.sort)

    const dispatch = useDispatch();

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        dispatch(setCurrentItemId(id));
        dispatch(setCurrentItemPosition(position));
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        const target = e.currentTarget as HTMLDivElement;
        target.classList.remove('active');
        dispatch(sortItems(deleteCurrentItem(calcItems, currentItemId)))
        function correctPos() {
            if (currentItemPosition < position && !left) return position - 1
            else return position
        }
        dispatch(addItem({
            id: correctPos(), 
            item: makeItem(currentItemId)
        }))
    }           

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.currentTarget as Element;
        if (target.className === 'wrapper-a') {
            target.classList.add('active');
        }
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.currentTarget as Element;
        target.classList.remove('active');
    }

    const dragEndHandler = (e :React.DragEvent<HTMLDivElement>) => {
        const target = e.currentTarget as Element;
        target.classList.remove('active');
    }

    return (
        <>
        {
            left 
            ?
            <div
                data-position={position}
                draggable 
                onDragStart={(e) => dragStartHandler(e)}
                className="wrapper">
                {children}
            </div>
            :
            <div
                data-position={position}
                draggable 
                onDragStart={(e) => dragStartHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                className="wrapper-a">
                {children}
            </div>
        }
        </>
    );
};

export default ItemWrapper;