/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

var a = 7;
console.log('a:', a); // 7

console.log('Numbers: a = 2:', (a = 2)); // 2

a = 7;
console.log('Numbers: a += 2:', (a += 2)); // 9

a = 7;
console.log('Numbers: a -= 2:', (a -= 2)); // 5

a = 7;
console.log('Numbers: a *= 2:', (a *= 2)); // 14

a = 7;
console.log('Numbers: a /= 2:', (a /= 2)); // 3.5

a = 7;
console.log('Numbers: a %= 2:', (a %= 2)); // 1
