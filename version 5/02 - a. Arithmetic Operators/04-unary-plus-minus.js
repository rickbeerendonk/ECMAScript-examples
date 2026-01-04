/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Unary plus operator - converts to number
var a = 5;
console.log(+a); // 5

var str = '42';
console.log(+str); // 42 (converts string to number)
console.log(typeof +str); // "number"

var boolValue = true;
console.log(+boolValue); // 1

// Unary minus operator - negates the value
var b = 10;
console.log(-b); // -10

var negStr = '-42';
console.log(-negStr); // -42 (converts string to number and negates)
console.log(typeof -negStr); // "number"
