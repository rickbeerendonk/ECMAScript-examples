'use strict';

let data = [1, 22, 333, 4444, 55555];
let [a, , b, ...rest] = data;


console.log(a);    // 1
console.log(b);    // 333
console.log(rest); // [4444, 55555]
