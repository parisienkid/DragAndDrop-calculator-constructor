import { FC } from 'react';
import './app.sass';
import Switch from '../switch/Switch';
import ItemWrapper from '../calc-item-wrapper/ItemWrapper';
import Btn from '../btn/Btn';
import Operator from '../operator/Operator';
import Number from '../number/Number';
import Total from '../total/Total';
import Zone from '../zone/Zone';


const App: FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="constructor">
          <Switch/>
          <div className="constructor__items">
            <ItemWrapper>
             <Total/>
            </ItemWrapper>
            <ItemWrapper>
              <div className="operators">
                <Btn><Operator name='plus'/></Btn>
                <Btn><Operator name='minus'/></Btn>
                <Btn><Operator name='divide'/></Btn>
                <Btn><Operator name='multiply'/></Btn>
              </div>
            </ItemWrapper>
            <ItemWrapper>
              <div className="numbers">
                <Btn><Number name='1'></Number></Btn>
                <Btn><Number name='2'></Number></Btn>
                <Btn><Number name='3'></Number></Btn>
                <Btn><Number name='4'></Number></Btn>
                <Btn><Number name='5'></Number></Btn>
                <Btn><Number name='6'></Number></Btn>
                <Btn><Number name='7'></Number></Btn>
                <Btn><Number name='8'></Number></Btn>
                <Btn><Number name='9'></Number></Btn>
                <Btn className='zero'><Number name='0'></Number></Btn>
                <Btn><Number name=','></Number></Btn>
              </div>
            </ItemWrapper>
          </div>
          <Zone/>
        </div>
      </div>
    </div>
  );
}

export default App;
