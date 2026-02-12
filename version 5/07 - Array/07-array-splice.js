/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var a = ['a', 'b', 'c', 'd', 'e'];

// Remove
var removed = a.splice(2, 1);
console.log('removed:', JSON.stringify(removed)); // ["c"]
console.log('a after removing:', JSON.stringify(a)); // ["a","b","d","e"]

// Replace
var a2 = ['a', 'b', 'c', 'd', 'e'];
a2.splice(1, 2, 'x', 'y');
console.log('a2 after replace:', JSON.stringify(a2)); // ["a","x","y","d","e"]

// Insert/Add at different positions (delete count = 0)
var a3 = ['a', 'b', 'c', 'd', 'e'];
a3.splice(2, 0, 'x', 'y'); // Insert at index 2
console.log('insert in middle:', JSON.stringify(a3)); // ["a","b","x","y","c","d","e"]

var a4 = ['a', 'b', 'c'];
a4.splice(3, 0, 'd', 'e'); // Insert at end (index = length)
console.log('insert at end:', JSON.stringify(a4)); // ["a","b","c","d","e"]
