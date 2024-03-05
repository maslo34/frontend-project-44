import _ from 'lodash';
import logic from '../index.js';
import greetings from './cli.js';

const primeNumber = (char) => {
  let count = 0;
  for (let i = 0; i <= char; i += 1) {
    if (char % i === 0) {
      count += 1;
    }
  }
  return count === 2 ? 'yes' : 'no';
};

export default () => {
  const userName = greetings();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let countAnswer = 0;
  for (let i = 0; i < 3; i += 1) {
    const ques = _.random(1, 50);
    const result = primeNumber(ques);
    const userAnsw = logic(ques, result);
    if (userAnsw === true) {
      countAnswer += 1;
      console.log('Correct!');
    } else {
      break;
    }
  }
  return countAnswer === 3
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`Let's try again, ${userName}!`);
};
