/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Pre-decrement: decrement value, then return it
var x = 3;
console.log(--x); // 2 (decremented, then logged)
console.log(x); // 2

// Post-decrement: return value, then decrement it
var y = 3;
console.log(y--); // 3 (logged first, then decremented)
console.log(y); // 2

// Pre-decrement in expression
var a = 5;
var result1 = --a + 10;
console.log(result1); // 14 (a becomes 4, then 4+10)
console.log(a); // 4

// Post-decrement in expression
var b = 5;
var result2 = b-- + 10;
console.log(result2); // 15 (5+10 first, then b becomes 4)
console.log(b); // 4
