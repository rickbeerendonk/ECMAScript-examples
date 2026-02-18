/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// apply() calls function with specific 'this' and arguments array
var person = {
  firstName: 'John',
  lastName: 'Doe'
};

function greet(greeting, punctuation) {
  return greeting + ' ' + this.firstName + ' ' + this.lastName + punctuation;
}

var result1 = greet.apply(person, ['Hello', '!']);
console.log(result1); // "Hello John Doe!"

// apply with empty arguments
var result3 = greet.apply(person, []);
console.log(result3); // "undefined John Doeundefined"

// Using apply for Math methods
var numbers = [5, 6, 2, 3, 7];
var max = Math.max.apply(null, numbers);
console.log(max); // 7

// Array concatenation using apply
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
Array.prototype.push.apply(array1, array2);
console.log(array1); // [1, 2, 3, 4, 5, 6]
