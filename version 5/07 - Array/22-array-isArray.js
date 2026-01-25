/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Arrays
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray([])); // true

// Non-arrays
console.log(Array.isArray("string")); // false
console.log(Array.isArray(123)); // false
console.log(Array.isArray({})); // false (object literal)
console.log(Array.isArray({length: 3})); // false (array-like but not array)

// Null and undefined
console.log(Array.isArray(null)); // false
console.log(Array.isArray(undefined)); // false

// Functions are not arrays
console.log(Array.isArray(function() {})); // false
