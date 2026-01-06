/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var a = ['a', 'b', 'c', 'd', 'e'];

var sliced1 = a.slice(1, 3);
console.log(JSON.stringify(sliced1)); // ["b","c"]

var sliced2 = a.slice(2);
console.log(JSON.stringify(sliced2)); // ["c","d","e"]

var sliced3 = a.slice(-3, -1);
console.log(JSON.stringify(sliced3)); // ["c","d"]

var sliced4 = a.slice(-2);
console.log(JSON.stringify(sliced4)); // ["d","e"]

var sliced5 = a.slice(); // Creates a shallow copy
console.log(JSON.stringify(sliced5)); // ["a","b","c","d","e"]

// Proof: modifying the copy doesn't affect original
sliced5[0] = 'x';
console.log(JSON.stringify(a));       // ["a","b","c","d","e"] - unchanged
console.log(JSON.stringify(sliced5)); // ["x","b","c","d","e"] - modified
