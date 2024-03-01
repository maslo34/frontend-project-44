import readlineSync from 'readline-sync';
import userName from '../src/cli.js'






export default () => {
    const joi = userName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    const arrChar = [15, 6, 7]
    let countAnswer = 0;

    for (const item of arrChar) {
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
            console.log(`'${number1}' is wrong answer ;(. Correct answer was ${result}.`)
            break
        };
        if (countAnswer === 3) {
            return console.log(`Congratulations, ${joi}!`);
        }
    }
    return console.log(`Let's try again, ${joi}!`);
};


