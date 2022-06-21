const username = prompt("What is your name?");
const message = `<h2>Hello ${username}. It's ${2 * 3} o'clock!
    I am happy you came by to visit my website</h2>`;

document.querySelector('main').innerHTML = message;
console.log(message);
