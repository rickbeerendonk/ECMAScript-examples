"use strict";

var one = "ë";
var two = "ë";
console.log(one.length); // 1
console.log(one.codePointAt(0)); // 235
console.log(two.length); // 2
console.log(two.codePointAt(0)); // 101
console.log(two.codePointAt(1)); // 776
console.log(one === two); // false
console.log(one.normalize() === two.normalize()); // true