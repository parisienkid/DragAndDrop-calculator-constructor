import { FC } from 'react';
import './total.sass';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store';

const Total:FC = () => {

    const {mode, total, value, counter} = useSelector((state: RootState) => state.calc)

    const renderTotal = () => {
        switch(mode) {
            case 'value':
                if (value === '') return 0
                else return value
            case 'counter':
                if (counter === '') return 0
                else return counter
            case 'total':
                return total
        }
    };

    return (
        <div className="total">
            {renderTotal()}
        </div>
    );
};

export default Total;