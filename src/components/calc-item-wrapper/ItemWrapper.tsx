import React, { DragEventHandler, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { setCurrentItem, addItem, sortItems, pushItem, setCurrentDropItem } from '../../core/reducers/sortSlice';
import './wrapper.sass';

interface ItemWrapperProps {
    children: React.ReactNode | React.ReactElement,
    id: number,
    left?: boolean,
    right?: boolean,
    position: number
}

const ItemWrapper: FC<ItemWrapperProps> = ({children, id, left, right, position}) => {

    const {currentItem} = useSelector((state: RootState) => state.sort)
    const {calcItems} = useSelector((state: RootState) => state.sort)

    const dispatch = useDispatch();

    const dragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        dispatch(setCurrentItem(id));
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {

        e.preventDefault();
        const target = e.currentTarget as HTMLDivElement;
        target.classList.remove('active');

        function deleteCurrentItem() {
            let newCalcItems = [...calcItems];
            newCalcItems = newCalcItems.map(item => {
                let newItem = {...item};
                newItem.items = newItem.items.filter(item => {
                    if (item.id !== currentItem) {
                        return item
                    }
                });
                return newItem
            });
            dispatch(sortItems(newCalcItems));
        }
        
        deleteCurrentItem();

        const attr = target.getAttribute('data-position');
        

        let addedItem = {};
        switch(currentItem) {
            case 1:
                addedItem = {id: 1, name: 'total'}
                break
            case 2:
                addedItem = {id: 2, name: 'operators'}
                break
            case 3: 
                addedItem = {id: 3, name: 'numbers'}
                break
            case 4:
                addedItem = {id: 4, name: 'equal'}
                break
        }
        dispatch(addItem({id: attr, item: addedItem}))
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
                data-position={position}
                draggable 
                onDragStart={(e) => dragStartHandler(e)}
                className="wrapper">
                {children}
            </div>
            :
            <div
                id={`${id}`}
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