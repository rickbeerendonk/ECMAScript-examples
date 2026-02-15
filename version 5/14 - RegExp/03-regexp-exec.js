/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var pattern = /hello/;
var result = pattern.exec('hello world');
console.log(result); // ["hello", index: 0, input: "hello world", groups: undefined]
console.log(result[0]); // hello
console.log(result.index); // 0

// No match returns null
console.log(pattern.exec('goodbye')); // null

// With capturing groups
var groupPattern = /(\w+)\s+(\w+)/;
var groupResult = groupPattern.exec('Hello World');
console.log(groupResult[0]); // Hello World
console.log(groupResult[1]); // Hello
console.log(groupResult[2]); // World

// Global flag - different behavior
var globalPattern = /\d+/g;
console.log(globalPattern.exec('123 and 456')); // [ '123', index: 0, input: '123 and 456', groups: undefined ]
console.log(globalPattern.exec('123 and 456')); // [ '456', index: 8, input: '123 and 456', groups: undefined ] (continues from lastIndex)
