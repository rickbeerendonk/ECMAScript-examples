/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 5 = 0101, 3 = 0011, 5 ^ 3 = 0110 = 6
console.log(5 ^ 3); // 6

// 12 = 1100, 10 = 1010, 12 ^ 10 = 0110 = 6
console.log(12 ^ 10); // 6

// 7 = 0111, 4 = 0100, 7 ^ 4 = 0011 = 3
console.log(7 ^ 4); // 3

// Toggle bit: a ^ a = 0
console.log(5 ^ 5); // 0

// Identity: a ^ 0 = a
console.log(5 ^ 0); // 5
