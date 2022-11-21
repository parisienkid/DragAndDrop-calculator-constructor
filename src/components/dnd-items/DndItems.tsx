import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';

import { setContent } from '../../core/utils/setContent';

import ItemWrapper from '../calc-item-wrapper/ItemWrapper';


const DndItems: FC = () => {
    const {calcItems} = useSelector((state: RootState) => state.sort)
    const {status} = useSelector((state: RootState) => state.calc)

    return (
        <div className="constructor__items">
            {
                calcItems && status === 'constructor'
                ?
                calcItems[0].items.map((item, i) => 
                    <ItemWrapper zone='left' id={item.id} key={item.id} position={i + 1}>
                    {setContent(item.name)}
                    </ItemWrapper>
                )
                :
                null
            }
        </div>
    );
};

export default DndItems;