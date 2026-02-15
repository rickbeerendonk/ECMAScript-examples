/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var a = [1, 2, 3, 4, 5];

var doubled = a.map(function (element) {
  return element * 2;
});

console.log(JSON.stringify(doubled)); // [2,4,6,8,10]

var strings = ['a', 'bb', 'ccc'];
var lengths = strings.map(function (element) {
  return element.length;
});

console.log(JSON.stringify(lengths)); // [1,2,3]

var numbers = [1, 2, 3, 4, 5];
var squared = numbers.map(function (x) {
  return x * x;
});

console.log(JSON.stringify(squared)); // [1,4,9,16,25]
