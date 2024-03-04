import _ from 'lodash';
import { logik } from './index.js';
import greetings from './cli.js';


const matSymbol = ['*', '-', '+',];

const calsSymbol = (number1, number2, char) => {
    if (matSymbol[char] === '*') {
        return number1 * number2;
    }
    if (matSymbol[char] === '-') {
        return number1 - number2;
    } else {
        return number1 + number2;
    }
};

export default () => {
    const userName = greetings();
    console.log('What is the result of the expression?');
    let count = 0;
    for ( let i = 0; i < 3; i += 1) {
        const firstNumber = _.random(100);
        const secondNumber = _.random(100);
        const randomSymbol = _.random(2);
        const ques = `${firstNumber} ${matSymbol[randomSymbol]} ${secondNumber}`;
        const result = calsSymbol(firstNumber,secondNumber, randomSymbol);
        const userAnsw = logik(ques, result);
        if ( userAnsw === true) {
            count += 1;
            console.log('Correct!');
        } else {
            break;
        }
    }
    return count === 3? console.log(`Congratulations, ${userName}!`): console.log(`Let's try again,  ${userName}!`);
}

