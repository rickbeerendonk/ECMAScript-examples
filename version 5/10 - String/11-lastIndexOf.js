/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// The lastIndexOf() method returns the index within the calling String.
var str = 'hello world hello';
console.log(str.lastIndexOf('hello')); // 12 (last occurrence)
console.log(str.indexOf('hello')); // 0 (first occurrence)

// With starting position (fromIndex).
// Searching backwards from fromIndex.
console.log(str.lastIndexOf('hello', 10)); // 0 (search before position 10)
console.log(str.lastIndexOf('hello', 20)); // 12 (full string)

// Substring not found
console.log(str.lastIndexOf('goodbye')); // -1

// Character search
var text = 'banana';
console.log(text.lastIndexOf('a')); // 5 (last "a")
console.log(text.indexOf('a')); // 1 (first "a")
