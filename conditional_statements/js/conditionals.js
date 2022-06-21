const answer = prompt("Which planet is closest to the sun?");

if ( answer === 'Mercury' ) {
    console.log('True');
} else {
    console.log('False');
}

let correctGuess = false;
const number = 6;
const guess = prompt("Try to guess the number");

// + operator here converts the string into a number
if (+guess === number) {
    correctGuess = true;
    console.log(`The guess is correct. correctGuess = ${correctGuess}`);
} else {
    console.log(`The guess is incorrect. correctGuess = ${correctGuess}`);
}

// Logical operators:
// AND:  &&
// OR:   ||

