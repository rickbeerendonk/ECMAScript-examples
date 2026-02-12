/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Stringify object
var obj = { name: 'Alexandra', age: 30 };
console.log(JSON.stringify(obj)); // {"name":"Alexandra","age":30}

// Stringify array
var arr = [1, 2, 3, 4, 5];
console.log(JSON.stringify(arr)); // [1,2,3,4,5]

// Stringify nested objects
var nested = { person: { name: 'Alexandra', city: 'Amsterdam' } };
console.log(JSON.stringify(nested)); // {"person":{"name":"Alexandra","city":"Amsterdam"}}

// Stringify primitives
console.log(JSON.stringify(true)); // true
console.log(JSON.stringify(null)); // null
console.log(JSON.stringify('hello')); // "hello"
console.log(JSON.stringify(123)); // 123

// Stringify with indentation (3rd parameter)
console.log(JSON.stringify(obj, null, 2));
// {
//   "name": "John",
//   "age": 30
// }
