"use strict";

var a = function a() {
  return "EcmaScript";
};

var b = function b(x) {
  return x * x;
};
var c = function c(x) {
  return x * x;
}; // Omit ()
var d = function d(x) {
  var y = x * x;return y;
}; // Add { ...; return ...; }

var e = function e(x, y) {
  return x * y;
};

console.log(a()); // EcmaScript
console.log(b(2)); // 4
console.log(c(3)); // 9
console.log(d(4)); // 16
console.log(e(5, 6)); // 30