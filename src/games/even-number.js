import greetings from "./cli.js";
import _ from "lodash";
import { logic } from "../index.js";

export default () => {
  const userName = greetings(); //Получение имени пользователя
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  //const arrChar =[_.random(20), _.random(20), _.random(20)];
  let countAnswer = 0;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = _.random(100);
    let result = "no";
    if (randomNumber % 2 === 0) {
      result = "yes";
    }
    const userAnsw = logic(randomNumber, result);
    if (userAnsw === true) {
      countAnswer += 1;
      console.log("Correct!");
    } else {
      break;
    }
  }
  return countAnswer === 3
    ? console.log(`Congratulations, ${userName}!`)
    : console.log(`Let's try again, ${userName}!`);
};

//Записать аскинему
//Числа должны быть рандомными
//Переработать логику

/*
console.log(`Question: ${item}`);
        const number1 = readlineSync.question('Your answer: ');
        let result = 'no';
        if (item % 2 === 0) {
            result = 'yes';
        }
        if (result === number1) {
            console.log('Correct!')
            countAnswer +=1
        } else {
            console.log(`'${number1}' is wrong answer ;(. Correct answer was '${result}'.`)
            break
        }
        if (countAnswer === 3) {
            return console.log(`Congratulations, ${joi}!`);
        }
    }
    return console.log(`Let's try again, ${joi}!`);
*/
