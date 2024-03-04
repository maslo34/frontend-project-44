import _ from 'lodash';
import { logic } from '../index.js';
import greetings from './cli.js';

const nod = (firstNumber, secondNumber) => {
    let result = 0
    const maxNumber = Math.max(firstNumber, secondNumber)
    for (let i = 0; i < maxNumber; i += 1) {
        if (firstNumber % i === 0 && secondNumber % i === 0) {
            result = i;
        }
    }
    return result;
}

export default () => {
    const userName = greetings();
    console.log('Find the greatest common divisor of given numbers.');
    let count = 0;
    for ( let i = 0; i < 3; i +=1) {

        const firstNumber = _.random(1, 100);
        const secondNumber = _.random(1, 100);
        const ques = `${firstNumber} ${secondNumber}`;
        const result = nod(firstNumber, secondNumber);
        const userAnsw = logic(ques, result);
        if ( userAnsw === true) {
            count += 1;
            console.log('Correct!');
        } else {
            break;
        }
    }
    return count === 3? console.log(`Congratulations, ${userName}!`): console.log(`Let's try again, ${userName}!`);
}
