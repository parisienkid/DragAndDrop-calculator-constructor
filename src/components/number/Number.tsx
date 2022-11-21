import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { addNumberValue, resetValue, addNumberCounter, changeMode, setValue, setCounter, setOperator } from '../../core/reducers/calcSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';

import './number.sass';

interface NumberProps {
    name: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' | '.'
}

const Number: FC<NumberProps> = ({name}) => {

    const dispatch = useDispatch();

    const {value, counter, mode, status} = useSelector((state: RootState) => state.calc)

    const clickNumber = () => {
        if (status === 'calculator') {
            if (counter === 'Нельзя') {
                dispatch(setCounter(''))
                dispatch(setOperator('none'))
            }
            if (value === 'Нельзя') {
                dispatch(setValue(''))
                dispatch(setOperator('none'))

            }
            if (mode === 'value') {
                dispatch(addNumberValue(name));
            } else if (mode === 'counter') {
                dispatch(addNumberCounter(name));
            } else if (mode === 'total') {
                dispatch(changeMode('value'))
                dispatch(resetValue())
                dispatch(addNumberValue(name));
            }
        }
    };

    return (
        <div className="number" onClick={clickNumber}>
            {name}
        </div>
    );
};

export default Number;