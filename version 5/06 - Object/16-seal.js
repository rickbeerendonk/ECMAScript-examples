/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// OBJECTS

// Object.seal prevents adding/removing properties but allows modification
var obj = { a: 1, b: 2 };
Object.seal(obj);

console.log(Object.isSealed(obj)); // true

// Can modify existing properties
obj.a = 10;
console.log(obj.a); // 10 (changed)

// Can't add new properties
// obj.c = 3; // Fails silently or throws in strict mode

// Can't delete properties
// delete obj.a; // Fails silently or throws in strict mode

console.log(obj); // { a: 10, b: 2 }

// Seal returns the object
var config = { host: 'localhost', port: 3000 };
var sealed = Object.seal(config);
console.log(sealed === config); // true

// ARRAYS

// Sealing arrays
var arr = [1, 2, 3];
Object.seal(arr);

console.log(Object.isSealed(arr)); // true

// Can modify elements
arr[0] = 99;
console.log(arr); // [99, 2, 3] (changed)

// Can't add elements
// arr[3] = 4; // Fails

// Can't change length by deletion
// arr.length = 2; // Fails

// SEAL vs FREEZE

// Difference between seal and freeze
var sealed_obj = { value: 10 };
Object.seal(sealed_obj);
sealed_obj.value = 20; // Works - can modify
console.log(sealed_obj.value); // 20

var frozen_obj = { value: 10 };
Object.freeze(frozen_obj);
// frozen_obj.value = 20; // Fails - can't modify

// SHALLOW SEAL

// Sealing nested objects (shallow seal)
var nested = {
  data: { x: 10 }
};
Object.seal(nested);

// Can't add/delete top-level properties
// nested.other = {}; // Fails

// But can modify nested objects
nested.data.x = 20;
console.log(nested.data.x); // 20 (changed)

// Can even modify nested object structure
nested.data.y = 30;
console.log(nested.data.y); // 30 (new property added)

// USE CASE

// Use case: form data object
var formData = {
  firstName: '',
  lastName: '',
  email: ''
};

Object.seal(formData);

// User fills in the form
formData.firstName = 'John';
formData.lastName = 'Doe';
formData.email = 'john@example.com';

console.log(formData); // All fields filled
// formData.phone = "555-1234"; // Would fail - not in original schema
