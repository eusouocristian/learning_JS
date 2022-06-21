// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
  ['What is the skys colour?', 'blue'],
  ['How tall I am?', '1.79'],
  ['What is the weather today?', 'sunny']
];

// 2. Store the number of questions answered correctly
let total_right = 0;
let total_wrong = 0;
let correct = [];
let incorrect = [];
/*
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i=0; i<questions.length; i++) {

  let question = questions[i][0];
  let answer = questions[i][1];
  user_ans = prompt(`${questions[i][0]}`);

  if (user_ans === answer) {
    total_right += 1;
    correct.unshift(question)
  } else {
    total_wrong += 1;
    incorrect.unshift(question)
  }
}

function createListItems( arr ) {
  let items = '';
  for ( let i = 0; i < arr.length; i++ ) {
      items += `<li>${arr[i]}</li>`;
      }
  return items;
  }


// 4. Display the number of correct answers to the user
let html = `
<h1>You got ${total_right} correct answers</h1>
<h2>Questions answered right:</h2>
  <ol>
    ${createListItems(correct)}
  </ol>
<h1>You got ${total_wrong} incorrect answers</h1>
<h2>Questions answered wrong:</h2>
  <ol>
    ${createListItems(incorrect)}
  </ol>
`
document.querySelector('main').innerHTML = html;