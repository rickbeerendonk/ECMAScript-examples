/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log('Sum:', sum); // 15

var product = numbers.reduce(function (accumulator, currentValue) {
  return accumulator * currentValue;
}, 1);

console.log('Product:', product); // 120
