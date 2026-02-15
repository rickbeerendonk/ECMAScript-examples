/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Shift removes the first element from an array and returns it.
// The original array is modified.
var arr = ['a', 'b', 'c', 'd', 'e'];
var first = arr.shift();
console.log(first); // "a"
console.log(arr); // ["b", "c", "d", "e"]

// Shift from beginning multiple times
arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.shift()); // "a"
console.log(arr.shift()); // "b"
console.log(arr); // ["c", "d", "e"]

// Shift on empty array returns undefined
var emptyArr = [];
console.log(emptyArr.shift()); // undefined
