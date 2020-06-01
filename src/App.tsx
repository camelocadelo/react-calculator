import React, { Component } from 'react';
import Screen from './Components/Screen/index';
import Button from './Components/Button/index';
import FunctionButton from './Components/FunctionButton/index';
import Dropdown from './Components/Dropdown/index';
import { connect } from 'react-redux';
import { getDisplay } from './selectors/selectors';
import { getCalcHistory } from './selectors/selectors';
import './App.css';

interface AppProps {
  display?: string
}

class App extends Component <AppProps, {}> {

  render() {
    return (
      <div className="app">
        <div className="calcContainer"> 
            <div className="row">
              <Screen value={this.props.display}>{this.props.display}</Screen>
            </div>
            {/* <div className="row">
              <Screen value={this.props.calcHistory}>{this.props.calcHistory}</Screen>
            </div> */}
            <div className="dropDownComponent">
              <Dropdown/>
            </div>
            <div className="keyboard">
            <div className="row"> 
              <FunctionButton value='C'/> 
              <FunctionButton value='/'/>
            </div>
            <div className="row">
              <Button value='7'/>
              <Button value='8'/> 
              <Button value='9'/>
              <Button value='*'/>
            </div>
            <div className="row">
              <Button value='4'/>
              <Button value='5'/>
              <Button value='6'/>
              <Button value='-'/> 
            </div>
            <div className="row">
              <Button value='1'/>
              <Button value='2'/>
              <Button value='3'/>
              <Button value='+'/>
            </div>
            <div className="row">
              <FunctionButton value='.'/>
              <FunctionButton value='0'/>
              <FunctionButton value='='/>
            </div>
          </div>
        </div> 
      </div>);
  }
}
  const mapStateToProps = (state:any) => {
    const displayValue = getDisplay(state);
    const calcHistoryValue = getCalcHistory(state);
    return ({
      display: displayValue,
      calcHistory: calcHistoryValue
    });
  };


export default connect(mapStateToProps, null)(App);
