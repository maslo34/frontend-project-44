import _ from 'lodash';
import getResultAnswer from '../index.js';

const matSymbol = ['*', '-', '+'];
const gameTask = 'What is the result of the expression?';

const calcResult = (number1, number2, char) => {
  switch (char) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const getQuestionAndAnswer = () => {
  const firstNumber = _.random(100);
  const secondNumber = _.random(20);
  const randomSymbol = _.random(2);
  const randomChar = matSymbol[randomSymbol];
  const ques = `${firstNumber} ${randomChar} ${secondNumber}`;
  const result = calcResult(firstNumber, secondNumber, randomChar);
  return [ques, String(result)];
};

export default () => {
  getResultAnswer(gameTask, getQuestionAndAnswer);
};
