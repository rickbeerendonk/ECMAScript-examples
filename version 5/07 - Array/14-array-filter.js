/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var a = [1, 2, 3, 4, 5, 6];

var evenNumbers = a.filter(function (element) {
  return element % 2 === 0;
});

console.log(JSON.stringify(evenNumbers)); // [2,4,6]

var words = ['one', 'two', 'three', 'four', 'five', 'six'];
var longWords = words.filter(function (element) {
  return element.length <= 3;
});

console.log(JSON.stringify(longWords)); // ["one","two","six"]

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var greaterThanFive = numbers.filter(function (x) {
  return x > 5;
});

console.log(JSON.stringify(greaterThanFive)); // [6,7,8,9,10]
