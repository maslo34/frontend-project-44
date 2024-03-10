import _ from 'lodash';
import getResultAnswer from '../index.js';

const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenNumber = (num) => num % 2 === 0;
const getQuestionAndAnswer = () => {
  const randomNumber = _.random(100);
  const ques = randomNumber;
  const result = evenNumber(randomNumber) ? 'yes' : 'no';
  return [ques, result];
};

export default () => {
  getResultAnswer(gameTask, getQuestionAndAnswer);
};
