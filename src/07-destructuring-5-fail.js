'use strict';

var someArray = [];

// No default
let [firstValue] = someArray;
console.log(firstValue);  // undefined

// Default
let [firstValueOrDefault = 1] = someArray;
console.log(firstValueOrDefault);  // 1
