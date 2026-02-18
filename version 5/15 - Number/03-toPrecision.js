/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var num = 123.456;
console.log(num.toPrecision()); // "123.456" (no arg returns toString)
console.log(num.toPrecision(5)); // "123.46" (5 significant digits)
console.log(num.toPrecision(3)); // "1.23e+2" (3 significant digits, switches to exponential)
console.log(num.toPrecision(2)); // "1.2e+2" (2 significant digits)

// Small numbers
var small = 0.000123;
console.log(small.toPrecision(2)); // "1.2e-4"
console.log(small.toPrecision(4)); // "0.0001230"

// Significant digits include all non-zero digits and any zeros between them (leading zeros are not significant)
console.log((1234.5).toPrecision(3)); // "1.23e+3"
