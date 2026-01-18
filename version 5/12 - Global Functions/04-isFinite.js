/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Finite values
console.log(isFinite(123)); // true
console.log(isFinite(123.45)); // true

// Infinite values
console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false

// NaN
console.log(isFinite(NaN)); // false
