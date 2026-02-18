/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var num = 123.456;
console.log(num.toExponential()); // "1.23456e+2"
console.log(num.toExponential(2)); // "1.23e+2"
console.log(num.toExponential(4)); // "1.2346e+2"

// Small numbers
var small = 0.000123;
console.log(small.toExponential()); // "1.23e-4"
console.log(small.toExponential(3)); // "1.230e-4"

// Large numbers
var large = 1000000;
console.log(large.toExponential()); // "1e+6"
console.log(large.toExponential(2)); // "1.00e+6"
