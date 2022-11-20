import { FC } from 'react';

import Switch from '../switch/Switch';
import DndItems from '../dnd-items/DndItems';
import Zone from '../zone/Zone';

import './app.sass';


const App: FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="constructor">
          <Switch/>
          <div className="areas">
            <DndItems/>
            <Zone/> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
