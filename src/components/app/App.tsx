import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import './app.sass';
import Switch from '../switch/Switch';
import ItemWrapper from '../calc-item-wrapper/ItemWrapper';
import { setContent } from '../../core/utils/setContent';
import Zone from '../zone/Zone';


const App: FC = () => {

  const dispatch = useDispatch();

  const {calcItems} = useSelector((state: RootState) => state.sort)

  return (
    <div className="App">
      <div className="container">
        <div className="constructor">
          <Switch/>
          <div className="areas">
            <div className="constructor__items">
              {
                calcItems[0].items.map(item => 
                  <ItemWrapper left id={item.id} key={item.id}>
                    {setContent(item.name)}
                  </ItemWrapper>
                )
              }
            </div>
            <Zone/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
