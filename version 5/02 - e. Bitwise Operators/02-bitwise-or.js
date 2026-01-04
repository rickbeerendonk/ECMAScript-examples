/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 5 = 0101, 3 = 0011, 5 | 3 = 0111 = 7
console.log(5 | 3); // 7

// 12 = 1100, 10 = 1010, 12 | 10 = 1110 = 14
console.log(12 | 10); // 14

// 7 = 0111, 4 = 0100, 7 | 4 = 0111 = 7
console.log(7 | 4); // 7

// 0 | 5 = 5 (convert to integer)
console.log(0 | 5); // 5
console.log(0 | 5.9); // 5 (truncates decimal)
