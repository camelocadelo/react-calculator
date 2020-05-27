import React from 'react';
import { StyledFunctionButton } from './styles';

interface FunctionButtonProps {
    onClick: Function,
    children: string
}

const FunctionButton = ({onClick, children}:FunctionButtonProps) => {
    return (
        <StyledFunctionButton onClick={()=> onClick(children)}>{ children }</StyledFunctionButton>
    )
}

export default FunctionButton;