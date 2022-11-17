import React, { DragEventHandler, FC } from 'react';
import './wrapper.sass';

interface ItemWrapperProps {
    children: React.ReactNode
}

const ItemWrapper: FC<ItemWrapperProps> = ({children}) => {

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('start')
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('leave')
    }

    const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('end')
    }

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log('over')
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        console.log('drop')
    }

    return (
        <div 
            draggable 
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e)}
            className="wrapper">
            {children}
        </div>
    );
};

export default ItemWrapper;