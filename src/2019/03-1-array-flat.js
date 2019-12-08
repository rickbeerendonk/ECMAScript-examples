/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

const arr = [1, [2, [3], 4], 5, [], 6];

console.log(arr.flat()); // [1, 2, [3], 4, 5, 6]
console.log(arr.flat(1)); // [1, 2, [3], 4, 5, 6]
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]
