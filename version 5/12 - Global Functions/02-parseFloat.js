/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 1. Parse floating point numbers
console.log(parseFloat("3.14")); // 3.14
console.log(parseFloat("123.45.67")); // 123.45 (stops at second dot)

// 2. Parse scientific notation
console.log(parseFloat("3.14e2")); // 314
console.log(parseFloat("2.5e-1")); // 0.25

// 3. Whitespace is trimmed
console.log(parseFloat("  3.14  ")); // 3.14

// 4. Returns NaN if not a number
console.log(parseFloat("hello")); // NaN

// 5. First non-numeric character stops parsing
console.log(parseFloat("3.14abc")); // 3.14
