import React, { Component } from 'react';
import { StyledScreen } from './styles'

interface ScreenProps {
  value?: string
}

class Screen extends Component <ScreenProps, {}> {
  render(){
    return (
    <StyledScreen>{ this.props.value }</StyledScreen>
      );
  }
}
 
export default Screen;