/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var a = ['apple', 'banana', 'cherry', 'banana'];


var index1a = a.indexOf('apple');
console.log(index1a); // 0

var index1b = a.indexOf('banana');
console.log(index1b); // 1

var index2a = a.indexOf('apple', 2 /* start searching from index 2 */);
console.log(index2a); // -1 (not found, because 'apple' is at index 0)

var index2b = a.indexOf('banana', 2 /* start searching from index 2 */);
console.log(index2b); // 3 (second 'banana' is at index 3)

var index3 = a.indexOf('grape', 2);
console.log(index3); // -1 (doesn't exist)
