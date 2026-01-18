/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

console.log('NaN:',  isNaN( NaN)); // true
console.log('-NaN:', isNaN(-NaN)); // true

// Numbers

console.log('123:',       isNaN(123));       // false
console.log('Infinity:',  isNaN(Infinity));  // false
console.log('-Infinity:', isNaN(-Infinity)); // false

// Boolean

console.log('true:',  isNaN(true));  // false (true coerced to 1)
console.log('false:', isNaN(false)); // false (false coerced to 0)

// String

console.log('"hello":', isNaN("hello")); // true (string coerced to number becomes NaN)
console.log('"123":',   isNaN("123"));   // false (string coerced to 123)
console.log('"":',      isNaN(""));      // false (empty string coerced to 0)

// Others

console.log('null:',      isNaN(null));      // false (null coerced to 0)
console.log('undefined:', isNaN(undefined)); // true (undefined coerced to NaN)
