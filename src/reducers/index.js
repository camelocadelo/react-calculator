import { HANDLE_DIGIT } from '../actions/index';
import { CALCULATE } from '../actions/index';
import { CLEAR } from '../actions/index';
import { UPDATE_DISPLAY } from '../actions/index';
import { calculateUtil } from '../utils/index';

const initialState = {
    display: '0',
    calcHistory: []
};

const calculatorReducer = (state = initialState, action) => {
    switch (action.type) {
        case HANDLE_DIGIT:
            return {...state,
                display: state.display=== '0' ? action.payload : state.display + action.payload,
                calcHistory: [...state.calcHistory, state.display, " "]}
        case CALCULATE:
            return {...state,
                display: calculateUtil(state.display),
                calcHistory: [...state.calcHistory, state.display, " "]}
        case CLEAR:
            return {...state,
                display: '0',
                calcHistory: [...state.calcHistory, state.display, " "]}
        case UPDATE_DISPLAY:
            return {...state,
                display: action.payload,
                calcHistory: [...state.calcHistory, state.display, " "]}
        default:
            return state;
    }
}

export default calculatorReducer;
