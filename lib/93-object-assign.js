'use strict';

// Babel:

require('babel-polyfill');

var o1 = { a: 1 };
var o2 = { b: 2, c: 3 };
var o3 = { c: 4, d: 5 };

var obj = Object.assign(o1, o2, o3);

console.log(o1); // { a: 1, b: 2, c: 4, d: 5 }  // changed
console.log(o2); // { b: 2, c: 3 }              // unchanged
console.log(o3); // { c: 4, d: 5 }              // unchanged

console.log(obj); // { a: 1, b: 2, c: 4, d: 5 }

console.log(obj === o1); // true