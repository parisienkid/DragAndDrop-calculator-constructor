import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../core/store';
import { pushItem, sortItems } from '../../core/reducers/sortSlice';
import ItemWrapper from '../calc-item-wrapper/ItemWrapper';
import { setContent } from '../../core/utils/setContent';
import './zone.sass';

interface ZoneProps {
    children?: React.ReactElement | React.ReactNode
}

const Zone: FC<ZoneProps> = ({children}) => {

    const dispatch = useDispatch();
    
    const {currentItem} = useSelector((state: RootState) => state.sort)

    const [dropped, setDropped] = useState(false);

    const {calcItems} = useSelector((state: RootState) => state.sort)

    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.target as Element;
        if (target.className === 'zone') {
            target.classList.add('active');
        }
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const target = e.target as Element;
        target.classList.remove('active');
    }

    const dragEndHandler = (e :React.DragEvent<HTMLDivElement>) => {
        const target = e.target as Element;
        target.classList.remove('active');
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDropped(!dropped);
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
        switch(currentItem) {
            case 1:
                dispatch(pushItem({id: 1, name: 'total'}))
                break
            case 2:
                dispatch(pushItem({id: 2, name: 'operators'}))
                break
            case 3:
                dispatch(pushItem({id: 3, name: 'numbers'}))
                break
            case 4:
                dispatch(pushItem({id: 4, name: 'equal'}))
                break
        }
    }

    

    return (
       <>
        {
            dropped == false
            ?
            <div 
                className="zone"
                onDragOver={(e) => dragOverHandler(e)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDrop={(e) => dropHandler(e)}
            >
                {children}
            </div>
            :
            <div 
                className="area">
                {
                    calcItems
                    ?
                    calcItems[1].items.map((item, i) => 
                    <ItemWrapper right id={i + 1} key={item.id} position={i + 1}>
                        {setContent(item.name)}
                    </ItemWrapper>
                    )
                    :
                    null
                }
            </div>
        }
       </>
    );
};

export default Zone;