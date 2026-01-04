/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var obj = {
  name: 'John',
  age: 30,
  city: 'New York'
};

var keys = Object.keys(obj);
console.log(JSON.stringify(keys)); // ["name","age","city"]

var arr = ['a', 'b', 'c'];
var arrayKeys = Object.keys(arr);
console.log(JSON.stringify(arrayKeys)); // ["0","1","2"]

var emptyObj = {};
var emptyKeys = Object.keys(emptyObj);
console.log(JSON.stringify(emptyKeys)); // []

// Iterate over object properties
var person = { firstName: 'Jane', lastName: 'Doe', age: 25 };
Object.keys(person).forEach(function(key) {
  console.log(key + ': ' + person[key]);
});
