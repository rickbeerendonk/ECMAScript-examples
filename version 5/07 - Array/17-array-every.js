/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var numbers = [2, 4, 6, 8];

var allEven = numbers.every(function (element) {
  return element % 2 === 0;
});

console.log(allEven); // true

var numbers2 = [2, 4, 5, 8];
var allEven2 = numbers2.every(function (element) {
  return element % 2 === 0;
});

console.log(allEven2); // false
