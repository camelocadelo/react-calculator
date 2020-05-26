import React from 'react';
import { StyledButton } from './styles';

const Button = (props) => {
    return (
        <StyledButton onClick={()=> props.onClick(props.children)}>{ props.children }</StyledButton>
    )
}

export default Button;