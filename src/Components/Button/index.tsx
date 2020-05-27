import React from 'react';
import { StyledButton } from './styles';

const Button = (props: any) => {
    console.log(props);
    console.log(props.children);
    return (
        <StyledButton onClick={()=> props.onClick(props.children)}>{ props.children }</StyledButton>
    )
}

export default Button;