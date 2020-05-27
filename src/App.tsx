import React, {Component} from 'react';
import Screen from './Components/Screen/index';
import Button from './Components/Button/index';
import FunctionButton from './Components/FunctionButton/index'
import { evaluate } from 'mathjs'

import './App.css';

class App extends Component {
  state= {
    count: '0'
  }

  reset = () => {
    const {count} = this.state
    this.setState({
      count: '0'
    })
  }

  addDot=() => {
    const {count} = this.state
      if(count.indexOf('.') === -1) {
        this.setState({
          count: count+'.'
        })
      }
  }

  Handle=(digit:string) => {
    const {count} = this.state
    this.setState({
      count:count==='0' ? digit : count+digit
    })
  }

  checkLastChar = (expression:string) => {
    const actions = /[+/\-x*.]$/;
    return actions.test(expression);
  }

  deleteElement = (expression:string, quantity:number) => {
    let output = expression.split('');
  
    if (output.length > 1) {
      return output.slice(0, output.length - quantity).join('');
    }
  
    return '0';
  }

  Calculate=()=>{

    let {count} = this.state
    while (this.checkLastChar(count)) {
      count = this.deleteElement(count, 1);
    }
    this.setState({
      count:evaluate(count)
    })
  }

  render() {
    return (
      <div className="app">
        <div className="calcContainer"> 
            <div className="row">
              <Screen value={this.state.count}> </Screen>
            </div>
            <div className="keyboard">
            <div className="row"> 
              <FunctionButton onClick={()=>this.reset()}> C </FunctionButton>
              <FunctionButton onClick={()=>this.Handle('/')}> / </FunctionButton>
            </div>
            <div className="row">
              <Button onClick={()=>this.Handle('7')}> 7 </Button>
              <Button onClick={()=>this.Handle('8')}> 8 </Button>
              <Button onClick={()=>this.Handle('9')}> 9 </Button>
              <Button onClick={()=>this.Handle('*')}> * </Button>
            </div>
            <div className="row">
              <Button onClick={()=>this.Handle('4')}> 4 </Button>
              <Button onClick={()=>this.Handle('5')}> 5 </Button>
              <Button onClick={()=>this.Handle('6')}> 6 </Button>
              <Button onClick={()=>this.Handle('-')}> - </Button>
            </div>
            <div className="row">
              <Button onClick={()=>this.Handle('1')}> 1 </Button>
              <Button onClick={()=>this.Handle('2')}> 2 </Button>
              <Button onClick={()=>this.Handle('3')}> 3 </Button>
              <Button onClick={()=>this.Handle('+')}> + </Button>
            </div>
            <div className="row">
              <FunctionButton onClick={()=>this.Handle('.')}> . </FunctionButton>
              <FunctionButton onClick={()=>this.Handle('0')}> 0 </FunctionButton>
              <FunctionButton onClick={()=>this.Calculate()}> = </FunctionButton>
            </div>
          </div>
        </div> 
      </div>)
  }
}

export default App;
