let age = 25;
let year = 2019;
console.log(age, year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

// points = 50; cannot override a constant keyword variable

var score = 75;
console.log(score);

// variable names cant take spaces
// variables can contain letters, underscore or numbers but cant start with a number
//variable names cant start with a keyword

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

//math operators + - * / ** %

// console.log(10 / 2);
// let result = radius % 3;

// let result = pi * radius ** 2;

//order of operations BIDMAS

// let result = 5 * (10 - 3) ** 2;

// console.log(result);

let likes = 10;

likes = likes + 1;
likes++;
likes--;
likes += 10;
likes -= 5;
likes *= 2;
likes /= 2;
console.log(likes);

//NAN not a number

// console.log(5 / "hello");
// console.log(5 * "hello");

//concatenate numbers

let result = "the blog has " + likes + " likes";
console.log(result);
