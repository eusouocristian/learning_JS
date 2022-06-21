function randomNumber(first, second) {
    // Convert the input to a number
    // Use Math.random() and the user's number to generate a random number
    if ( isNaN(first) || isNaN(second)) {
        throw Error("Both arguments must be numbers.");
    }

    let dieRoll = Math.floor( Math.random() * (second - first + 1) ) + first;
    return dieRoll;
}

function errorMessage() {
    document.querySelector('h2').textContent = error_message;
}


// Collect input from a user
let input1 = prompt("type the first number");
let input2 = prompt("type the second number");

menor = parseInt(input1);
maior = parseInt(input2);

let error_message = "Your input contains an error! Reload the page and try again";
let execute = confirm("Die a roll?");

if (execute == true) {

    //Calls the function
    let dieRoll = randomNumber(maior, menor);

    // Create a message displaying the random number
    let message = `You rolled a ${dieRoll}: Value is between ${menor} and ${maior}`;
    document.querySelector('h2').textContent = message;
    console.log(message);
}






