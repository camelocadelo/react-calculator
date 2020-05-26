import React from 'react';
import { StyledScreen } from './styles'

const Screen = (props) => {
    return (
    <StyledScreen>{props.value}</StyledScreen>
      );
}
 
export default Screen;