import React, { FC } from 'react';
import './operator.sass';


interface OperatorProps {
    name: 'plus' | 'minus' | 'divide' | 'multiply'
}


const Operator: FC<OperatorProps> = ({name}) => {
    return (
        <div className="operator">
            {
                name === 'plus'
                ?
                '+'
                :
                name === 'minus'
                ?
                '-'
                :
                name === 'divide'
                ?
                '/'
                :
                name === 'multiply'
                ?
                '*'
                :
                null
            }
        </div>
    );
};

export default Operator;