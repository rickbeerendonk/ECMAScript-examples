/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Unshift adds one or more elements to the beginning of an array
// and returns the new length of the array.
var arr = ['b', 'c', 'd'];
var newLength = arr.unshift('a');
console.log(newLength); // 4
console.log(arr); // ["a", "b", "c", "d"]

// Add multiple elements at beginning
arr = ['c', 'd'];
console.log(arr.unshift('a', 'b')); // 4
console.log(arr); // ["a", "b", "c", "d"]
