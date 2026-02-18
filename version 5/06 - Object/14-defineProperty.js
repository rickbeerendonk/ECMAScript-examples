/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Basic property definition
var obj = {};
Object.defineProperty(obj, 'name', {
  value: 'John',
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(obj.name); // "John"

// Non-writable property
var obj2 = {};
Object.defineProperty(obj2, 'constant', {
  value: 42,
  writable: false,
  enumerable: true
});

console.log(obj2.constant); // 42
// obj2.constant = 100; // Would fail in strict mode

// Non-enumerable property (not shown in for...in or Object.keys)
var obj3 = {};
Object.defineProperty(obj3, 'hidden', {
  value: 'secret',
  writable: true,
  enumerable: false
});

console.log(obj3.hidden); // "secret"
console.log(Object.keys(obj3)); // [] (hidden is not enumerable)
console.log(Object.getOwnPropertyNames(obj3)); // ["hidden"] (includes all)

// Getter and setter (to control access to a property)
var obj4 = {};
var internalValue = 0;

Object.defineProperty(obj4, 'value', {
  get: function () {
    return internalValue;
  },
  set: function (val) {
    internalValue = val;
  },
  enumerable: true
});

obj4.value = 10;
console.log(obj4.value); // 10 (via getter)

// Computed property
var obj5 = {};
Object.defineProperty(obj5, 'age', {
  get: function () {
    return 2026 - this.birthYear;
  },
  enumerable: true
});

obj5.birthYear = 2000;
console.log(obj5.age); // 26

// Read-only property
var obj6 = {};
Object.defineProperty(obj6, 'readonly', {
  value: 'immutable',
  writable: false,
  configurable: false
});

console.log(obj6.readonly); // "immutable"
// Can't be changed or deleted

// Multiple properties at once (Object.defineProperties)
var obj7 = {};
Object.defineProperties(obj7, {
  firstName: {
    value: 'John',
    writable: true
  },
  lastName: {
    value: 'Doe',
    writable: true
  },
  fullName: {
    get: function () {
      return this.firstName + ' ' + this.lastName;
    }
  }
});

console.log(obj7.fullName); // "John Doe"

// Modifying existing property descriptor
var obj8 = { x: 10 };
Object.defineProperty(obj8, 'x', {
  writable: false
});

console.log(obj8.x); // 10
// obj8.x = 20; // Would fail in strict mode
