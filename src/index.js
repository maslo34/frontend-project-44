import readlineSync from "readline-sync";

export const logic = (ques, result) => {
  console.log(`Question: ${ques}`);
  const userAnsw = readlineSync.question("Your answer: ");
  if (userAnsw == result) {
    return true;
  } else {
    console.log(
      `'${userAnsw}' is wrong answer ;(. Correct answer was '${result}'.`
    );
    return false;
  }
};
