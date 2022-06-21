// Converting the code below to an arrow function
/*
function getRandomNumber() {
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
  }
*/

// First convert into a annonymous function
/*
const getRandomNumber = function(){
    const randomNumber = Math.floor( Math.random() * 6 ) + 1;
    return randomNumber;
};
*/

//Finally convert into a arrow function deleting the function keyword and adding an arrow
const getRandomNumber = ( upper = 6 ) => {
    const randomNumber = Math.floor( Math.random() * upper ) + 1;
    return randomNumber;
};




// ------------------------------

/*
When you omit the return keyword in a single-line function, the value is returned automatically (or implicitly). This is called an implicit return.

In fact, when using an implicit return, you don't even need the curly braces (they are optional). You can reduce the arrow syntax further by writing the function like this:

const square = x => x * x;

const multiply = (x, y) => x * y;

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
*/