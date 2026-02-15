/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Create RegExp using literal notation
var regex1 = /hello/;

// Create RegExp using constructor
var regex2 = new RegExp('hello');

// Both are equivalent
console.log(regex1.toString()); // /hello/
console.log(regex2.toString()); // /hello/

// Flags: i (ignore case), g (global), m (multiline)
var ignoreCase = /hello/i;
var global = /hello/g;
var multiline = /hello/m;

console.log(ignoreCase.toString()); // /hello/i
console.log(global.toString()); // /hello/g
console.log(multiline.toString()); // /hello/m
