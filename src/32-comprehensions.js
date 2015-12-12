"use strict";

var result = [for (i of [ 1, 2, 3 ]) i * i ];

console.log(result[0]);  // 1
console.log(result[1]);  // 4
console.log(result[2]);  // 9