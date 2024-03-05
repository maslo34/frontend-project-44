import readlineSync from 'readline-sync';

export default (ques, result) => {
  console.log(`Question: ${ques}`);
  const userAnsw = readlineSync.question('Your answer: ');
  if (Number(userAnsw) === result || userAnsw === result) {
    return true;
  }
  console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${result}'.`);
  return false;
};
