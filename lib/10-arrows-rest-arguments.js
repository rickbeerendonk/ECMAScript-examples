"use strict";

var _arguments = arguments;
var x = function x(a, b) {
  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  return [a, b, rest];
};
console.log(x(1, 2, 3, 4)); // [ 1, 2, [3, 4] ]

// Specs: Arguments should not exists
// Babel: Arguments exists
var y = function y(a, b) {
  for (var _len2 = arguments.length, rest = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    rest[_key2 - 2] = arguments[_key2];
  }

  return _arguments;
};
console.log(y(1, 2, 3, 4));