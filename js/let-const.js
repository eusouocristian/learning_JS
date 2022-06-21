// Const is used for constant variables, to prevent changing its value accidentally
// const will assign a value only once (it is impossible to change)
const score = 10


// Let is like var but can not be declared twice.
let new_score = 20
new_score += 1

// Var can be declared twice. The second declaration override the first.
var one_more_score = 7
one_more_score += 1
var one_more_score = 99 // The output is going to be 99

console.log('score:', score)
console.log('new_score:', new_score)
console.log('one_more_score:', one_more_score)
