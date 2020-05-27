import React from 'react';
import { StyledButton } from './styles';

interface ButtonProps {
    onClick: Function,
    children: string
}

const Button = ({onClick, children}: ButtonProps) => {

    return (
        <StyledButton onClick={()=> onClick(children)}>{ children }</StyledButton>
    )
}

export default Button;