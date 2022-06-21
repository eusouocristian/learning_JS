//Creating a new array
const instruments = ['piano', 'drums', 'trumpet'];

//Add a new value to the end of the array
let instrument_to_end = prompt("You can add a new instrument to the end of the list:");
instruments.push(instrument_to_end);

//Add a new value to the beggining of the array
let instrument_to_begin = prompt("You can add a new instrument to the beggining of the list:");
instruments.unshift(instrument_to_begin);

//log the result to the console
console.log(`you play ${instruments.length} instruments:`);

for(let i=0;i <= instruments.length-1; i++) {
    console.log(instruments[i])
}


//Remove the last item and store into a new variable
lastItem = instruments.pop();
firstItem = instruments.shift();

console.log('instruments after removal:', instruments)

//Create one single string with all array elements
console.log(`instruments.join(', ') = `, instruments.join(', '));
