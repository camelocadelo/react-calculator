export const HANDLE_DIGIT = 'HANDLE_DIGIT';
export const CALCULATE = 'CALCULATE';
export const CLEAR = 'CLEAR';
export const UPDATE_DISPLAY = 'UPDATE_DISPLAY';

export const handleDigitAction = (digit) => ({
    type: HANDLE_DIGIT,
    payload: digit
});

export const calculateAction = (digit) => ({
    type: CALCULATE
});

export const clearAction = () => ({
    type: CLEAR
});

export const updateDisplayAction = (value) => ({
    type: UPDATE_DISPLAY,
    payload: value
})