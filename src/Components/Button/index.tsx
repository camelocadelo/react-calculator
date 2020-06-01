import React, { Component } from 'react';
import { StyledButton } from './styles';
import { connect } from 'react-redux';
import { handleDigitAction } from '../../actions/index';
import { Dispatch } from 'redux';

interface ButtonProps {
  value: string;
  handleDigit: Function
}

class Button extends Component <ButtonProps, {}> {
    render(){
      const { handleDigit } = this.props;
    return (
        <StyledButton onClick={()=> handleDigit(this.props.value)}>{ this.props.value }</StyledButton>
    );
}
}

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleDigit: (digit:string) => dispatch(handleDigitAction(digit))
  });


export default connect(null, mapDispatchToProps)(Button);