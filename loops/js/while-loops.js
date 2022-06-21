function getRandomNumber(first, second) {
    // Convert the input to a number
    // Use Math.random() and the user's number to generate a random number
    if ( isNaN(first) || isNaN(second)) {
        throw Error("Both arguments must be numbers.");
    }

    let randomNumber = Math.floor( Math.random() * (second - first + 1) ) + first;
    return randomNumber;
}


let counter1 = 1;
while(counter1 <= 10) {
    console.log( `while loop: ${counter1} = `, getRandomNumber(1,100) );
    counter1 += 1;
}

let counter2 = 1;
do {
    console.log( `do-while loop: ${counter2} = `, getRandomNumber(1,100) );
    counter2 += 1;
} while (counter2 <= 10)