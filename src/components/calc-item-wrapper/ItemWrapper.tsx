import React, { DragEventHandler, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { setCurrentItem, addItem, pushItem, setCurrentDropItem } from '../../core/reducers/sortSlice';
import './wrapper.sass';

interface ItemWrapperProps {
    children: React.ReactNode | React.ReactElement,
    id: number,
    left?: boolean,
    right?: boolean,
}

const ItemWrapper: FC<ItemWrapperProps> = ({children, id, left, right}) => {

    const {currentItem} = useSelector((state: RootState) => state.sort)

    const dispatch = useDispatch();

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        dispatch(setCurrentItem(id));
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.currentTarget as HTMLDivElement;
        if (target.parentElement?.classList.contains('area')) {
            target.classList.remove('active');
            
        }
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
                id={`${id}`}
                draggable 
                onDragStart={(e) => dragStartHandler(e)}
                onDrop={(e) => dropHandler(e)}
                className="wrapper">
                {children}
            </div>
            :
            <div
                id={`${id}`}
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