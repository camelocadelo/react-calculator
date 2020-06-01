import React, { useState } from 'react';
import { StyledDropDownContainer } from './styles';
import { StyledDropDownHeader } from './styles';
import { StyledDropDownListContainer } from './styles';
import { StyledDropDownList } from './styles';
import { StyledListItem } from './styles';

import { getDisplay } from '../../selectors/selectors'
import { getCalcHistory } from '../../selectors/selectors'

import { connect } from 'react-redux';
import {updateDisplayAction } from '../../actions/index';

function Dropdown(props) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = value => () => {
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

  const mapStateToProps = state => {
    const displayValue = getDisplay(state);
    const calcHistoryValue = getCalcHistory(state);
    return ({
      display: displayValue,
      calcHistory: calcHistoryValue
    });
  };

  const mapDispatchToProps = (dispatch) => ({
    updateDisplay: (value) => dispatch(updateDisplayAction(value))
  });


  export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
