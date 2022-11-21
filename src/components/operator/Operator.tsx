import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setOperator, setCounter, changeMode, setValue } from '../../core/reducers/calcSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';
import './operator.sass';

export interface OperatorProps {
    name: 'plus' | 'minus' | 'divide' | 'multiply' | 'none'
}

const Operator: FC<OperatorProps> = ({name}) => {

    const dispatch = useDispatch();

    const {value, status} = useSelector((state: RootState) => state.calc)

    const onChangeOperator = () => {
        if (status === 'calculator') {
            dispatch(setOperator(name))
            dispatch(changeMode('counter'))
            dispatch(setCounter(''))
            if (value === '') {
                dispatch(setValue('0'))
            }
        }
    };

    const renderName = () => {
        switch(name) {
            case 'plus':
                return '+'
            case 'minus':
                return '-'
            case 'divide':
                return '/'
            case 'multiply':
                return '*'
            default:
                return ''
        }
    };

    return (
        <div className="operator" onClick={onChangeOperator}>
            {renderName()}
        </div>
    );
};

export default Operator;