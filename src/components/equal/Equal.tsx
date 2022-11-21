import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setTotal, setCounter, changeMode, setValue } from '../../core/reducers/calcSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import { count } from '../../core/utils/count';

interface EqualProps {
    name: string
}

const Equal: FC<EqualProps> = ({name}) => {

    const dispatch = useDispatch();

    const {value, operator, counter, status, mode} = useSelector((state: RootState) => state.calc);

    const updateTotal = () => {
        if (status === 'calculator') {
            if (mode !== 'total') {
                dispatch(changeMode('total'))
            }
            if (counter === '') {
                dispatch(setCounter('0'));
            }
            dispatch(setTotal(count(counter, value, operator)))
            dispatch(setValue(count(counter, value, operator)))
        }
    };

    return (
        <div onClick={updateTotal}>
            {name}
        </div>
    );
};

export default Equal;