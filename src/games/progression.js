import _ from 'lodash';
import { logic } from '../index.js';
import greetings from './cli.js';

const arrProgression = (lergthProgression, stepSize) => {
  let answer = 0;
  const randomPass = _.random(lergthProgression - 2);
  let numberProgression = _.random(100);
  const progression = [numberProgression];
  for (let i = 0; i < lergthProgression; i += 1) {
    numberProgression += stepSize;
    progression.push(numberProgression);
    if (i === randomPass) {
      answer = progression.pop();
      progression.push('..');
    }
  }
  progression.push(answer);
  return progression;
};

export default () => {
  const userName = greetings();
  console.log('What number is missing in the progression?');
  let count = 0;
  for (let i = 0; i < 3; i += 1) {
    const lergthProgression = _.random(5, 15);
    const stepSize = _.random(2, 10);
    const arrNumber = arrProgression(lergthProgression, stepSize);
    const result = arrNumber.pop();
    const ques = arrNumber.join(' ');
    const userAnsw = logic(ques, result);
    if (userAnsw === true) {
      count += 1;
      console.log('Correct!');
    } else {
      break;
    }
  }
  return count === 3
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`Let's try again, ${userName}!`);
};
