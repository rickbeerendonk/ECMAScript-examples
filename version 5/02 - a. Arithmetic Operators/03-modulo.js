/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var a = 10;
var b = 3;

console.log(a + ' % ' + b + ' = ' + (a % b)); // 1

console.log(7 % 2); // 1
console.log(8 % 2); // 0
console.log(10 % 3); // 1
console.log(-10 % 3); // -1
console.log(10 % -3); // 1

var x = 15;
console.log('Is ' + x + ' even?', x % 2 === 0); // false
console.log('Is ' + x + ' odd?', x % 2 !== 0); // true
