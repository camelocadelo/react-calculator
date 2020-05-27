import React from 'react';
import { StyledScreen } from './styles'

interface ScreenProps {
  value: string
}

const Screen = ({value}: ScreenProps) => {
    return (
    <StyledScreen>{ value }</StyledScreen>
      );
}
 
export default Screen;