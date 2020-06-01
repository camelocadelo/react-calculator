import React, { useState } from 'react';
import { StyledDropDownContainer } from './styles';
import { StyledDropDownHeader } from './styles';
import { StyledDropDownListContainer } from './styles';
import { StyledDropDownList } from './styles';
import { StyledListItem } from './styles';
import { Dispatch } from 'redux';
import { getDisplay } from '../../selectors/selectors'
import { getCalcHistory } from '../../selectors/selectors'

import { connect } from 'react-redux';
import {updateDisplayAction } from '../../actions/index';

interface DropDownProps {
  updateDisplay: Function,
  calcHistory: any[]
}

interface IAppState {
  display: string;
  calcHistory: any[];
}

function Dropdown(props: DropDownProps) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value:string) => () => {
        setSelectedOption(value);
        setIsOpen(false);
        props.updateDisplay(value);
        console.log(selectedOption);
      };
    
        return(
            <StyledDropDownContainer>
                <StyledDropDownHeader onClick={toggling}>
                    { selectedOption }
                </StyledDropDownHeader>
                {isOpen && (<StyledDropDownListContainer>
                    <StyledDropDownList>
                        { props.calcHistory.map(option =>
                        <StyledListItem onClick={onOptionClicked(option)}>
                            { option }
                        </StyledListItem>
                        )}
                    </StyledDropDownList> 
                </StyledDropDownListContainer>)}
                      
            </StyledDropDownContainer>
        );
    }

  const mapStateToProps = (state: IAppState) => {
    const displayValue = getDisplay(state);
    const calcHistoryValue = getCalcHistory(state);
    return ({
      display: displayValue,
      calcHistory: calcHistoryValue
    });
  };

  const mapDispatchToProps = (dispatch: Dispatch) => ({
    updateDisplay: (value:string) => dispatch(updateDisplayAction(value))
  });


  export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
