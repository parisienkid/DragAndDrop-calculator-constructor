import { FC } from 'react';

interface EqualProps {
    name: string
}

const Equal: FC<EqualProps> = ({name}) => {
    return (
        <div>
            {name}
        </div>
    );
};

export default Equal;