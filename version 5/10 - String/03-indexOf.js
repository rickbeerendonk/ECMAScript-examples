/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var str = 'Hello World';

console.log(str.indexOf('o')); // 4
console.log(str.indexOf('World')); // 6
console.log(str.indexOf('xyz')); // -1

console.log(str.indexOf('o', 5)); // 7 (starts searching from index 5)
