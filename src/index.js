import readlineSync from 'readline-sync';
import greetings from './games/cli.js';

export default (gameTask, getQuestionAndAnswer) => {
  const countRound = 3;
  const userName = greetings();
  console.log(gameTask);
  for (let i = 0; i < countRound; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`"${userAnswer}" is a wrong answer. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
