/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

'use strict';

// OBJECTS

// Object.freeze makes an object immutable
var obj = { a: 1, b: 2 };
Object.freeze(obj);

console.log(Object.isFrozen(obj)); // true

// Can't modify properties
obj.a = 10; // Fails silently or throws in strict mode

// Can't add new properties
// obj.c = 3; // Fails silently or throws in strict mode

// Can't delete properties
// delete obj.a; // Fails silently or throws in strict mode

console.log(obj); // { a: 1, b: 2 } (unchanged)

// Reading still works
console.log(obj.a); // 1

// Freeze returns the object
var config = { host: 'localhost', port: 3000 };
var frozen = Object.freeze(config);
console.log(frozen === config); // true

// ARRAYS

// Freezing arrays
var arr = [1, 2, 3];
Object.freeze(arr);

console.log(Object.isFrozen(arr)); // true
// arr[0] = 99; // Fails
// arr.push(4); // Fails

console.log(arr); // [1, 2, 3] (unchanged)

// SHALLOW FREEZE

// Freeze only affects the immediate object (shallow freeze)
var nested = {
  data: { x: 10 }
};
Object.freeze(nested);

// Can't modify top level
// nested.data = { x: 20 }; // Fails

// But can modify nested objects
nested.data.x = 20;
console.log(nested.data.x); // 20 (changed!)
