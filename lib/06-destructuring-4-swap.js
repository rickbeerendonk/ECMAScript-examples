'use strict';

let a = 'One';
let b = 'Two';

[a, b] = [b, a];

console.log(a); // Two
console.log(b); // One