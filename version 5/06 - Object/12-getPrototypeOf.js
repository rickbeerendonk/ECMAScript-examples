/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Object.getPrototypeOf returns the prototype of an object.
// Prototypes let objects share methods, saving memory
// and enabling a form of inheritance.

// Problem 1: Without prototypes, every object duplicates its methods.
// Each dog below has its own copy of speak — wasteful!
var dog1 = {
  name: 'Rex',
  speak: function () {
    return this.name + ' says Woof!';
  }
};
var dog2 = {
  name: 'Bella',
  speak: function () {
    return this.name + ' says Woof!';
  }
};
console.log(dog1.speak === dog2.speak); // false (two copies in memory)
console.log();

// Solution: Put shared methods on a prototype so all objects reuse them.
var dogProto = {
  speak: function () {
    return this.name + ' says Woof!';
  }
};
var dog3 = Object.create(dogProto);
dog3.name = 'Rex';
var dog4 = Object.create(dogProto);
dog4.name = 'Bella';

console.log(dog3.speak()); // "Rex says Woof!"
console.log(dog4.speak()); // "Bella says Woof!"
console.log(dog3.speak === dog4.speak); // true (one shared copy)

// getPrototypeOf confirms they share the same prototype
console.log(Object.getPrototypeOf(dog3) === dogProto); // true
console.log(Object.getPrototypeOf(dog4) === dogProto); // true
console.log();

// Problem 2: Code reuse — building specialized objects from general ones.
// A vehicle has shared behavior; a car adds its own on top.
var vehicle = {
  start: function () {
    return this.type + ' started';
  }
};
var car = Object.create(vehicle);
car.type = 'Car';
car.honk = function () {
  return 'Beep!';
};

console.log(car.start()); // "Car started"  (inherited from vehicle)
console.log(car.honk()); // "Beep!"        (own method)

// getPrototypeOf shows the inheritance relationship
console.log(Object.getPrototypeOf(car) === vehicle); // true
console.log();

// Problem 3: Constructors create many instances — prototype keeps them lean.
function Person(name) {
  this.name = name; // own data per instance
}
Person.prototype.greet = function () {
  return 'Hi, I am ' + this.name; // shared method
};

var alice = new Person('Alice');
var bob = new Person('Bob');

console.log(alice.greet()); // "Hi, I am Alice"
console.log(bob.greet()); // "Hi, I am Bob"

// getPrototypeOf links each instance back to Person.prototype
console.log(Object.getPrototypeOf(alice) === Person.prototype); // true
console.log(Object.getPrototypeOf(bob) === Person.prototype); // true
