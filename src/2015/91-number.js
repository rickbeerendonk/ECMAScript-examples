/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

const n = 5.12;

console.log(Number.isFinite(n)); // true
console.log(Number.isInteger(n)); // false

console.log('');

const n1 = Number.NaN;
const n2 = Number.NaN;
console.log(n1 === n2); // false
console.log(Number.isNaN(n1) == Number.isNaN(n2)); // true
