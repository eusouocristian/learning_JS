/**
 *
 * @param {string} greeting - {default = "Good Morning"} The greeting as a string
 * @param {string} name - {default = "student"} Person's name
 * @returns {string} Full greeting + name
 */

function sayGreeting(greeting='Good Morning', name='student') {
    return `${greeting}, ${name}.`
}


/**
 * Calculates and returns the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} length - The length of the rectangle.
 * @param {string} unit - The unit of measurement.
 * @returns {string} The area of the rectangle and unit of measure.
 */

 function getArea(width, length, unit) {
    const area = width * length;
    return `${area} ${unit}`;
 }

sayGreeting()


// To call only the second parameter
//console.log( sayGreeting(undefined, 'Cristian') );
