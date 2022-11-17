import React, { FC } from 'react';

interface NumberProps {
    name: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '0' | ','
}

const Number: FC<NumberProps> = ({name}) => {
    return (
        <div className="number">
            {name}
        </div>
    );
};

export default Number;