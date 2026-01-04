/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Pre-increment: increment value, then return it
var x = 3;
console.log(++x); // 4 (incremented, then logged)
console.log(x); // 4

// Post-increment: return value, then increment it
var y = 3;
console.log(y++); // 3 (logged first, then incremented)
console.log(y); // 4

// Pre-increment in expression
var a = 5;
var result1 = ++a + 10;
console.log(result1); // 16 (a becomes 6, then 6+10)
console.log(a); // 6

// Post-increment in expression
var b = 5;
var result2 = b++ + 10;
console.log(result2); // 15 (5+10 first, then b becomes 6)
console.log(b); // 6
