import _ from 'lodash';
import getResultAnswer from '../index.js';

const matSymbol = ['*', '-', '+', '/'];
const gameTask = 'What is the result of the expression?';

const calcResult = (number1, number2, char) => {
  switch (char) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      break;
  }
};

const getRandomNumber = (value) => {return _.random(value)};

const getQuestionAndAnswer = () => {
  const firstNumber = getRandomNumber(100);
  const secondNumber = getRandomNumber(100);
  const randomSymbol = getRandomNumber(2);
  const randomChar = matSymbol[randomSymbol];
  const ques = `${firstNumber} ${randomChar} ${secondNumber}`;
  const result = calcResult(firstNumber, secondNumber, randomChar);
  return [ques, String(result)];
};

export default () => {
  getResultAnswer(gameTask, getQuestionAndAnswer);
};
