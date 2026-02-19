/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Single character
console.log(String.fromCharCode(65)); // "A"
console.log(String.fromCharCode(97)); // "a"

// Multiple characters
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"

// Numbers and symbols
console.log(String.fromCharCode(48, 49, 50)); // "012"
console.log(String.fromCharCode(33, 63)); // "!?"

// Create alphabet
var uppercase = '';
for (var i = 65; i <= 90; i++) {
  uppercase += String.fromCharCode(i);
}
console.log(uppercase); // "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

// Convert back using charCodeAt
var char = 'A';
console.log(char.charCodeAt(0)); // 65
console.log(String.fromCharCode(char.charCodeAt(0))); // "A"
