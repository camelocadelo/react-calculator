import React, { Component } from 'react';
import { StyledButton } from './styles';
import { connect } from 'react-redux';
import { handleDigitAction } from '../../actions/index'


class Button extends Component {

    render(){
      const { handleDigit } = this.props;
    return (
        <StyledButton onClick={()=> handleDigit(this.props.value)}>{ this.props.value }</StyledButton>
    );
}
}

  const mapDispatchToProps = (dispatch) => ({
    handleDigit: (digit) => dispatch(handleDigitAction(digit))
  });


export default connect(null, mapDispatchToProps)(Button);