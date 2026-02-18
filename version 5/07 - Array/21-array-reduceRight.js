/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var arr = [1, 2, 3, 4];

// Sum from right to left
var sum = arr.reduceRight(function (acc, val) {
  return acc + val;
}, 0);
console.log(sum); // 10

// Reverse string array
var words = ['hello', ' ', 'world'];
var result = words.reduceRight(function (acc, word) {
  return acc + word;
}, '');
console.log(result); // "world hello"

// Build array in reverse order
var reversed = arr.reduceRight(function (acc, val) {
  acc.push(val);
  return acc;
}, []);
console.log(reversed); // [4, 3, 2, 1]
