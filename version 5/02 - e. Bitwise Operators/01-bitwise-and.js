/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 5 = 0101, 3 = 0011, 5 & 3 = 0001 = 1
console.log(5 & 3); // 1

// 12 = 1100, 10 = 1010, 12 & 10 = 1000 = 8
console.log(12 & 10); // 8

// 7 = 0111, 4 = 0100, 7 & 4 = 0100 = 4
console.log(7 & 4); // 4

// Check if number is even (last bit is 0)
console.log((6 & 1) === 0); // true (6 is even)
console.log((7 & 1) === 1); // true (7 is odd)
