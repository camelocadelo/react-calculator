import React, { Component } from 'react';
import { StyledScreen } from './styles'

class Screen extends Component {
  render(){
    return (
    <StyledScreen>{ this.props.value }</StyledScreen>
      );
  }
}
 
export default Screen;