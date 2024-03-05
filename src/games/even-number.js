import _ from 'lodash';
import logic from '../index.js';
import greetings from './cli.js';

export default () => {
  const userName = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countAnswer = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = _.random(100);
    let result = 'no';
    if (randomNumber % 2 === 0) {
      result = 'yes';
    }
    const userAnsw = logic(randomNumber, result);
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
