/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var str = 'ABC';

console.log(str.charCodeAt(0)); // 65 (A)
console.log(str.charCodeAt(1)); // 66 (B)
console.log(str.charCodeAt(2)); // 67 (C)

// Out of bounds
console.log(str.charCodeAt(3)); // NaN (index out of range)
