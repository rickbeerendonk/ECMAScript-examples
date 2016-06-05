'use strict';

// Babel:
require('babel/polyfill');

var s1 = Symbol(1);
var s2 = Symbol('rick/two');
var s3 = Symbol('rick/three');

var obj = {};

console.log('1 === Symbol(1): ' + 1 === Symbol(1)); // false

obj[1] = 'No symbol prop';
obj[s1] = 'Symbol prop 1';
obj[s2] = 'Symbol prop 2';
obj[s3] = 'Symbol prop 3';

console.log(obj[1]); // No symbol prop
console.log(obj[s1]); // Symbol prop 1
console.log(obj[s2]); // Symbol prop 2
console.log(obj[s3]); // Symbol prop 3

/*
Symbol.hasInstance
Symbol.iterator
*/