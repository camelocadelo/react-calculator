import React, { Component } from 'react';
import { StyledFunctionButton } from './styles';
import { connect } from 'react-redux';
import { handleDigitAction } from '../../actions/index';
import { calculateAction } from '../../actions/index';
import { clearAction } from '../../actions/index';

class FunctionButton extends Component {

    constructor(props) {
      super(props);
      this.handle = this.handle.bind(this);
    }
    
    handle(element) {
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

  const mapDispatchToProps = (dispatch) => ({
    handleDigit: (digit) => dispatch(handleDigitAction(digit)),
    calculate: () => dispatch(calculateAction()),
    clear: () => dispatch(clearAction())
  });


export default connect(null, mapDispatchToProps)(FunctionButton);