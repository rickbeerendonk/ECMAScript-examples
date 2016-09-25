'use strict';

let data = [1, 22, 333, 4444];

// Works in Chrome, but not in Babel :(
// let [a, ...[b, ...rest]] = data;

// Temporary (to make Babel happy)
let [a, ...temp] = data;
let [b, ...rest] = temp;

console.log(a);    // 1
console.log(b);    // 22
console.log(rest); // [333, 4444]
