const person = {
  name: 'Edward',
  nickname: 'Duke',
  city: 'New York',
  age: 37,
  isStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

// Iterate through th object
for (let prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}

