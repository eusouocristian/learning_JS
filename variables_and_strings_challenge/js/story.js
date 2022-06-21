// 1. Declare variables and capture input.
let adjective = prompt('Type a adjective.');
let verb = prompt('Type a verb.');
let noun = prompt('Type a noun.');


// 2. Combine the input with other words to create a story.
const story = `There once  was a ${adjective} programmer who
whanted to use JavaScript to ${verb} the ${noun}.`

// 3. Display the story as a <p> inside the <main> element.
document.querySelector('main').innerHTML = `<p>${story}</p>`