import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { setCurrentItemId, setCurrentItemPosition, addItem, sortItems, setCurrentItemZone } from '../../core/reducers/sortSlice';
import deleteCurrentItem from '../../core/utils/deleteCurrent';
import makeItem from '../../core/utils/makeItem';
import './wrapper.sass';

interface ItemWrapperProps {
    children: React.ReactNode | React.ReactElement,
    id: number,
    position: number,
    zone: string
}

const ItemWrapper: FC<ItemWrapperProps> = ({children, id, position, zone}) => {

    const {currentItemPosition, currentItemZone, currentItemId, calcItems} = useSelector((state: RootState) => state.sort)

    const dispatch = useDispatch();

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        dispatch(setCurrentItemId(id));
        dispatch(setCurrentItemZone(zone));
        if (zone !== 'left') {
            dispatch(setCurrentItemPosition(position))
        }
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.stopPropagation();
        e.preventDefault();
        const target = e.currentTarget as HTMLDivElement;
        target.classList.remove('active');
        dispatch(sortItems(deleteCurrentItem(calcItems, currentItemId)))
        function correctPos() {
            if (currentItemPosition < position && zone !== 'left' && currentItemZone === 'right') return position - 1
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
            zone === 'left' 
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