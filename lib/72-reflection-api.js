'use strict';

// Babel

import 'babel-polyfill';

function MyClass(firstName, lastName) {
	this.name = firstName + ' ' + lastName;
}

var instance = Reflect.construct(MyClass, ['Steve', 'Ballmer']);

console.log(Reflect.has(instance, 'firstName')); // false;
console.log(Reflect.has(instance, 'lastName')); // false;
console.log(Reflect.has(instance, 'name')); // true;

console.log(Reflect.get(instance, 'name')); // Steve Ballmer
console.log(Reflect.set(instance, 'name', 'Satya Nadella')); // true
console.log(Reflect.get(instance, 'name')); // Satya Nadella