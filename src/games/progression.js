import _ from 'lodash';
import getResultAnswer from '../index.js';


const getRandomNumber = (value1, value2) => {
  return _.random(value1, value2);
}

const getProgression = (lergthProgression, stepSize) => {
  let numberProgression = getRandomNumber(100);
  const progression = [numberProgression];
  for (let i = 0; i < lergthProgression; i += 1) {
    numberProgression += stepSize;
    progression.push(numberProgression);
  }
  return progression;
};

const gameTask = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const lergthProgression = getRandomNumber(5, 15);
  const stepSize = getRandomNumber(2, 10);
  const arrNumber = getProgression(lergthProgression, stepSize);
  const randomPass = getRandomNumber(lergthProgression - 1);
  const answer = arrNumber[randomPass];
  arrNumber[randomPass] = '..';
  const ques = arrNumber.join(' ');
  return [ques, String(answer)];
};

export default () => {
  getResultAnswer(gameTask, getQuestionAndAnswer);
};
