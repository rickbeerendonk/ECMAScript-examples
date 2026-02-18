/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// search returns index of first match or -1 if not found
var result1 = 'hello world'.search(/o/);
console.log(result1); // 4 (first 'o' at index 4)

var result2 = 'hello world'.search(/z/);
console.log(result2); // -1 (not found)

// Case-insensitive search: /i flag
var result3 = 'Hello World'.search(/hello/i);
console.log(result3); // 0 (found with case-insensitive flag)

// Search with character class: [0-9] to find first digit
var result4 = 'abc123def'.search(/[0-9]/);
console.log(result4); // 3 (first digit at index 3)

// Search for whitespace: \s matches any whitespace character
var result5 = 'one two three'.search(/\s/);
console.log(result5); // 3 (first space at index 3)

// Search with beginning anchor: ^ matches start of string
var result6 = 'hello'.search(/^he/);
console.log(result6); // 0

var result7 = 'hello'.search(/^lo/);
console.log(result7); // -1 (doesn't start with 'lo')

// String argument (converted to RegExp)
var result8 = 'test123'.search('123');
console.log(result8); // 4

// Note: search always finds first match, even with global flag
var result9 = 'aaa'.search(/a/g);
console.log(result9); // 0 (still finds first match)
