import { evaluate } from 'mathjs';

export const calculateUtil = (count) => {
    const checkLastChar =  (expression) => {
        const actions = /[+/\-x*.]$/;
        return actions.test(expression);
      };
    
    const deleteElement = (expression, quantity) => {
        let output = expression.split('');
      
        if (output.length > 1) {
          return output.slice(0, output.length - quantity).join('');
        }
        return '0';
      };

    //Normalizing the count string
    while (checkLastChar(count)) {
        count = deleteElement(count, 1);
      }

    let result = evaluate(count);
    return result;
};

