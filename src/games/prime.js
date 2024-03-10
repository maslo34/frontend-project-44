import _ from 'lodash';
import getResultAnswer from '../index.js';

const primeNumber = (number) => {
  if (number <= 1) {
    return false;
  }
  const initialValue = 2;
  for (let i = initialValue; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameTask = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const ques = _.random(1, 50);
  const result = primeNumber(ques) ? 'yes' : 'no';
  return [ques, result];
};

export default () => {
  getResultAnswer(gameTask, getQuestionAndAnswer);
};
