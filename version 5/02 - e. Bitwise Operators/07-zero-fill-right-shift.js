/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 10 >>> 1 = 5 (shift right, fill with zeros)
console.log(10 >>> 1); // 5

// -10 >>> 1 treats -10 as unsigned, result is different
console.log(-10 >>> 1); // 2147483645

// This can be used to convert to unsigned 32-bit integer
console.log(-1 >>> 0); // 4294967295
console.log(5 >>> 0); // 5
