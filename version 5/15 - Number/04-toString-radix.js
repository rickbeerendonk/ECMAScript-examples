/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var num = 255;

// Binary (base 2)
console.log(num.toString(2)); // "11111111"

// Octal (base 8)
console.log(num.toString(8)); // "377"

// Decimal (base 10) - default
console.log(num.toString()); // "255"
// Hexadecimal (base 16)
console.log(num.toString(16)); // "ff"

// Other bases
console.log(num.toString(3)); // "100110" (base 3)
console.log(num.toString(36)); // "73" (base 36, includes letters)

// Negative numbers
var neg = -255;
console.log(neg.toString(2)); // "-11111111"
