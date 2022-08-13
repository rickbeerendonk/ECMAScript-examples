/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

const s1 = Symbol('rick/one');
const s2 = Symbol('rick/one');
const s3 = Symbol.for('rick/one');
const s4 = Symbol.for('rick/one');

console.log(s1 === s2); // false
console.log(s1 === s3); // false
console.log(s2 === s3); // false
console.log(s3 === s4); // true

/*
Symbol.hasInstance
Symbol.iterator
*/
