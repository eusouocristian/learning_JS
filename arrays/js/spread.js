// Insert content into an array
const middle = ['lettuce', 'cheese', 'patty'];
//expand the content of middle inside the burger array
const burger = ['top bun', ...middle, 'bottom bun'];

console.log(burger)


// Methods to combine two arrays
const brass = ['trumpet', 'trombone', 'french horn', 'baritone', 'tuba'];
const woodwind = ['flute', 'oboe', 'clarinet', 'saxophone', 'bassom'];
const instruments = [...brass, ...woodwind];

console.log(instruments)


//Spread using functions
const numbers = [1, 10, 34, 48, 89, 123];
console.log('Numbers array:', ...numbers)
console.log('Maximum:', Math.max(...numbers))
console.log('Minimum:', Math.min(...numbers))
