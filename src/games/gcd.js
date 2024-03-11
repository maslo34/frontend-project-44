import _ from 'lodash';
import getResultAnswer from '../index.js';

const gameTask = 'Find the greatest common divisor of given numbers.';

const nod = (firstNumber, secondNumber) => {
  let result = 0;
  const maxNumber = Math.max(firstNumber, secondNumber);
  if (
    Math.min(firstNumber, secondNumber) === 0
    || firstNumber === secondNumber
  ) {
    result = maxNumber;
    return result;
  }
  for (let i = 0; i < maxNumber; i += 1) {
    if (firstNumber % i === 0 && secondNumber % i === 0) {
      result = i;
    }
  }
  return result;
};

const getRandomNumber = (value) => _.random(value);

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);
  const ques = `${firstNumber} ${secondNumber}`;
  const result = nod(firstNumber, secondNumber);
  return [ques, String(result)];
};

export default () => {
  getResultAnswer(gameTask, getQuestionAndAnswer);
};
