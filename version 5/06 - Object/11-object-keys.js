/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 1. Object.keys returns array of own property names
var obj = { a: 1, b: 2, c: 3 };
var keys = Object.keys(obj);
console.log(keys); // ["a", "b", "c"]

// 2. Only own properties, not inherited
var proto = { inherited: 'inheritedValue' };
var child = Object.create(proto);
child.own = 'ownValue';
console.log(Object.keys(child)); // ["own"] (not "inherited")

// 3. With numeric keys
var arr = { 0: 'zero', 1: 'one', 2: 'two' };
console.log(Object.keys(arr)); // ["0", "1", "2"] (as strings)

/// BONUS ///

//  4. Using keys to iterate
var config = { host: 'localhost', port: 3000, debug: true };
Object.keys(config).forEach(function (key) {
  console.log(key + ': ' + config[key]);
});

// 5. Count properties
var settings = { theme: 'dark', fontSize: 14, language: 'en' };
console.log('Property count: ' + Object.keys(settings).length); // 3

// 6. Copy object using keys
var original = { x: 10, y: 20 };
var copy = {};
Object.keys(original).forEach(function (key) {
  copy[key] = original[key];
});
console.log(copy); // { x: 10, y: 20 }
