/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// call() calls function with specific 'this' and individual arguments
var person = {
  firstName: 'Jane',
  lastName: 'Smith'
};

function introduce(greeting, punctuation) {
  return (
    greeting + " I'm " + this.firstName + ' ' + this.lastName + punctuation
  );
}

var result1 = introduce.call(person, 'Hello', '!');
console.log(result1); // "Hello I'm Jane Smith!"

// call with no additional arguments
var result3 = introduce.call(person);
console.log(result3); // "undefined I'm Jane Smith undefined"

// Difference from apply: arguments are separate, not in array
function greet(greeting) {
  return greeting + ' ' + this.name;
}

// With call: arguments as separate parameters
console.log(greet.call({ name: 'Alice' }, 'Hello')); // "Hello Alice"

// With apply: arguments as array
console.log(greet.apply({ name: 'Bob' }, ['Hi'])); // "Hi Bob"

// call for inheritance pattern
function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

var myDog = new Dog('Buddy', 'Labrador');
console.log(myDog.name); // "Buddy"
console.log(myDog.breed); // "Labrador"

// Method borrowing with call
var array = [1, 2, 3];
var hasMethod = Object.prototype.hasOwnProperty;
console.log(hasMethod.call(array, 'length')); // true
