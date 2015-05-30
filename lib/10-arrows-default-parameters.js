"use strict";

var f = function f() {
  var x = arguments[0] === undefined ? 10 : arguments[0];
  return x * x;
};

console.log(f()); // 100