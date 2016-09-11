'use strict';

var a = () => 'EcmaScript';

var b = x => x * x;
var c = x => x * x; // Omit ()
var d = x => {
  var y = x * x;return y;
}; // Add { ...; return ...; }

var e = (x, y) => x * y;

console.log(a()); // EcmaScript
console.log(b(2)); // 4
console.log(c(3)); // 9
console.log(d(4)); // 16
console.log(e(5, 6)); // 30