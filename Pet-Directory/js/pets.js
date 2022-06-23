/*
  Create an array of 'pet' objects.
  Each object should have the following properties:
  name, type, breed, age, and photo
*/
pets = [
  {
    name: 'Aussizinha',
    type: 'dog',
    breed: 'Aussie',
    age: 3,
    photo: 'img/aussie.jpg'
  },
  {
    name: 'Emma',
    type: 'dog',
    breed: 'Dachshund',
    age: 1,
    photo: 'img/dachshund.jpg'
  },
  {
    name: 'Frederico',
    type: 'dog',
    breed: 'Golden',
    age: 5,
    photo: 'img/golden.jpg'
  },
  {
    name: 'Gatinha',
    type: 'cat',
    breed: 'Persian',
    age: 2,
    photo: 'img/persian.jpg'
  },
  {
    name: 'Bolota',
    type: 'dog',
    breed: 'Pug',
    age: 3,
    photo: 'img/pug.jpg'
  }
];

let html = '';
const main = document.querySelector('main');

for (let i=0; i<pets.length; i++) {
  let name = pets[i].name;
  let type = pets[i].type;
  let breed = pets[i].breed;
  let age = pets[i].age;
  let photo = pets[i].photo;

  html += `
  <h2>${name}</h2>
  <h3>${type} | ${breed}</h3>
  <p>Age: ${age}</p>
  <img src="${photo}" alt="${breed}">
  `
}

//document.querySelector('main').innerHTML = html;
main.insertAdjacentHTML('beforeend', html);