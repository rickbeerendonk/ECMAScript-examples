/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 10 >> 1 = 5 (1010 becomes 0101, divide by 2)
console.log(10 >> 1); // 5

// 20 >> 2 = 5 (10100 becomes 00101, divide by 4)
console.log(20 >> 2); // 5

// -10 >> 1 = -5 (sign bit is preserved)
console.log(-10 >> 1); // -5

// 10 >> 0
console.log(10 >> 0); // 10
