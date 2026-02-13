/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var a = ['a', 'b', 'c'];

a.forEach(function (element, index) {
  console.log(index + ':', element);
});
// 0: a
// 1: b
// 2: c

var sum = 0;
var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (element) {
  sum += element;
});

console.log('Sum:', sum); // 15
