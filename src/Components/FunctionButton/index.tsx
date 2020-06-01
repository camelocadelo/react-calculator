import React, { Component } from 'react';
import { StyledFunctionButton } from './styles';
import { connect } from 'react-redux';
import { handleDigitAction } from '../../actions/index';
import { calculateAction } from '../../actions/index';
import { clearAction } from '../../actions/index';
import { Dispatch } from 'redux';

interface FunctionButtonProps {
  value: string,
  calculate: Function,
  clear: Function,
  handleDigit: Function
}

class FunctionButton extends Component <FunctionButtonProps, {}> {
    
    handle(element:string) {
      if (element === '=') {
        console.log("The element is =");
        this.props.calculate();
      } else if (element === 'C') {
        console.log("The element is C");
        this.props.clear();
      } else {
        console.log("Else statement in FunctionButton");
        this.props.handleDigit(element);
      }
    }

    render(){
    return (
        <StyledFunctionButton onClick={()=> this.handle(this.props.value)}>{ this.props.value }</StyledFunctionButton>
    );
}
}

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleDigit: (digit:string) => dispatch(handleDigitAction(digit)),
    calculate: () => dispatch(calculateAction()),
    clear: () => dispatch(clearAction())
  });


export default connect(null, mapDispatchToProps)(FunctionButton);