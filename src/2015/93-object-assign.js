/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Babel:
//import 'babel-polyfill';

let o1 = { a: 1 };
let o2 = { b: 2, c: 3 };
let o3 = { c: 4, d: 5 };

let obj = Object.assign(o1, o2, o3);

console.log(o1); // { a: 1, b: 2, c: 4, d: 5 }  // changed
console.log(o2); // { b: 2, c: 3 }              // unchanged
console.log(o3); // { c: 4, d: 5 }              // unchanged

console.log(obj); // { a: 1, b: 2, c: 4, d: 5 }

console.log(obj === o1); // true
