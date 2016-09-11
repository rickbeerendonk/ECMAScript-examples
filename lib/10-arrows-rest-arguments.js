'use strict';

var _arguments = arguments;
var x = (a, b, ...rest) => [a, b, rest];
console.log(x(1, 2, 3, 4)); // [ 1, 2, [3, 4] ]

// Specs: Arguments should not exists
// Babel: Arguments exists
var y = (a, b, ...rest) => _arguments;
console.log(y(1, 2, 3, 4));