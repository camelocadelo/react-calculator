import React from 'react';
import { StyledFunctionButton } from './styles';

const FunctionButton = (props: any) => {
    return (
        <StyledFunctionButton onClick={()=> props.onClick(props.children)}>{ props.children }</StyledFunctionButton>
    )
}

export default FunctionButton;