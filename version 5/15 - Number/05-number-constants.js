/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// MAX_VALUE - largest representable number
console.log(Number.MAX_VALUE);          // 1.7976931348623157e+308

// MIN_VALUE - smallest positive representable number
console.log(Number.MIN_VALUE);          // 5e-324

// POSITIVE_INFINITY - positive infinity
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(1 / 0);                     // Infinity

// NEGATIVE_INFINITY - negative infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity
console.log(-1 / 0);                    // -Infinity

// NaN - not a number
console.log(Number.NaN);                // NaN
console.log(0 / 0);                     // NaN

// Practical examples
var maxValue = Number.MAX_VALUE;
console.log(maxValue * 2);              // Infinity (overflow)

var minValue = Number.MIN_VALUE;
console.log(minValue / 2);              // 0 (underflow)
