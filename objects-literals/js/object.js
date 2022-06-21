const person = {
    name: 'Cristian',
    city: 'Toronto',
    age: 35,
    isMarried: true,
    role: 'Automation Specialist',
    skills: ['python', 'matlab', 'JavaScript', 'HTML', 'CSS']
};

//Acessing the data: key and value
console.log(`My name is ${person.name} and I am ${person.age} years old.`);
console.log(`I live in ${person['city']} and I know ${person['skills'][2]}.`)

// Changing values
person.city = 'Vancouver';
console.log(`I moved to ${person['city']}.`)


// Adding new information to the object literals
person.weight = 89;
console.log(`I have ${person.weight} kg`)

// Show all keys:
console.log('All keys: ', Object.keys(person));

// Show all values:
console.log('All values: ', Object.values(person));

// Show length of an object literal
console.log('Length: ', Object.keys(person).length);


// Put two objects together
const thename = {
    firstName: 'Reggie',
    lastName: 'Williams',
    };

const therole = {
    title: 'Software developer',
    skills: ['JavaScript', 'HTML', 'CSS'],
    isTeacher: true
    };
// merge `name` and `role` into a `person` object
const theperson = {
    ...thename,
    ...therole
    };
console.log(theperson);
// {firstName: 'Reggie', lastName: 'Williams', title: 'Software developer', skills: Array(3), isTeacher: true}