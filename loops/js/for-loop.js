function getRandomNumber(first, second) {
    // Convert the input to a number
    // Use Math.random() and the user's number to generate a random number
    if ( isNaN(first) || isNaN(second)) {
        throw Error("Both arguments must be numbers.");
    }

    let randomNumber = Math.floor( Math.random() * (second - first + 1) ) + first;
    return randomNumber;
}

for (let count = 1; count <= 6; count++) {
    console.log( `For loop: ${count} = `, getRandomNumber(1,60) );
}


//Show on the webpage
const main = document.querySelector('main');
let html = '';
const randomValue = () => Math.floor(Math.random() * 256);

function randomRGB(value) {
    let colour = `rgb(${value()}, ${value()}, ${value()})`
    return colour;
}

for (let i = 1; i <= 100; i++){
    html += `<div style="background-color: ${randomRGB(randomValue)}">${i}</div>`;
}

main.innerHTML = html;