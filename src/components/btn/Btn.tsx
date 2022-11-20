import { FC, ReactNode } from 'react';
import './btn.sass';

interface BtnProps {
    children: ReactNode
    className?: string
}

const Btn: FC<BtnProps> = ({children, className}) => {

    return (
        <button className={`btn ${className ? className : ''}`}>
            {children}
        </button>
    );
};

export default Btn;