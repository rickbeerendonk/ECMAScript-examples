/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// ~5 inverts all bits: 0101 becomes 1010 (two's complement: -6)
console.log(~5); // -6

// ~0 = -1
console.log(~0); // -1

// ~(-1) = 0
console.log(~-1); // 0

// Check if value not found in indexOf (indexOf returns -1 if not found)
var arr = [1, 2, 3, 4, 5];
console.log(~arr.indexOf(3)); // -4 (non-zero, so 3 exists)
console.log(~arr.indexOf(10)); // 0 (zero, so 10 not found)
