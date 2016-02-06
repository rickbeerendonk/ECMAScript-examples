"use strict";

// Babel:

require("babel/polyfill");

var n = 5.12;

console.log(Number.isFinite(n)); // true
console.log(Number.isInteger(n)); // false

console.log("");

var n1 = Number.NaN;
var n2 = Number.NaN;
console.log(n1 === n2); // false
console.log(Number.isNaN(n1) == Number.isNaN(n2)); // true