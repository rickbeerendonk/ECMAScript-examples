/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var str = 'Hello World';

console.log(str.substring(0, 5)); // Hello
console.log(str.substring(6)); // World

// substring treats negative indices as 0
console.log(str.substring(-3)); // Hello World
console.log(str.substring(6, 3)); // lo  (swaps arguments)
