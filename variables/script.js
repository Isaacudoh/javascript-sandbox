// ways to declare a variable
// var, let, const
// const are for values that will not be reassigned over time

let firstName = "Nsikak";
let lastName = "Udoh";

console.log(firstName, lastName);

let age = 30;
console.log(age);

// reassiging variables

age = 31;
console.log(age);

let score;

score = 1;
console.log(score);

if (true) {
  score = score + 1;
}

console.log(score);

// const x = 100;
// x = 200; // cant's be reassigned

const arr = [1, 2, 3, 4];

arr.push(5); // method that adds to the end.

console.log(arr);

const person = {
  name: "nsikak",
};

person.name = "okon";
person.email = "nsikak@gmail.com";
person.age = 12;

console.log(person);

// Declare multiple variables at once

let a, b, c;
const d = 10,
  e = 20,
  f = 20;
