/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Parse JSON strings
var jsonString = '{"name":"Alexandra","age":30}';
var obj = JSON.parse(jsonString);
console.log(obj.name); // Alexandra
console.log(obj.age); // 30

// Parse JSON array
var arrayString = '[1,2,3,4,5]';
var arr = JSON.parse(arrayString);
console.log(arr[0]); // 1
console.log(arr.length); // 5

// Parse nested objects
var nestedString = '{"person":{"name":"Alexandra","city":"Amsterdam"}}';
var nested = JSON.parse(nestedString);
console.log(nested.person.name); // Alexandra

// Parse primitives
console.log(JSON.parse('true')); // true
console.log(JSON.parse('null')); // null
console.log(JSON.parse('"hello"')); // hello
console.log(JSON.parse('123')); // 123
