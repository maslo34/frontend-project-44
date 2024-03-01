import readlineSync from 'readline-sync';



// Wait for user's response.
export default () => {
    const userName = readlineSync.question('May I have your name? ');
    return console.log('Hello, ' + userName + '!');
};

