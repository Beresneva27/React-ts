import React, { FC, useState } from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    //children?: React.ReactChild | React.ReactNode
    variant: CardVariant;
    onClick: (num: number) => void;
}

const Card: FC<CardProps> = 
    ({
        width, 
        height,
        variant,
        onClick
        
    }) => {
    const [state, setState] = useState(0);
    return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : ''
        }}
            onClick={() => onClick(state)}
        >

        </div>
            
    );
};

export default Card;