'use strict';

// No default

let [a] = [];
console.log(a); // undefined

// Default
let [b = 1] = [];
console.log(b); // 1