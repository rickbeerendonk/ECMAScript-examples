'use strict';

// Methods (no 'function')

var shortMethods = {
	toString() {
		return '-> ' + super.toString();
	}
};

// Prototype
var objProto = {
	__proto__: shortMethods
};

console.log(objProto.toString()); // -> [object Object]


// Short properties
var name = 'EcmaScript 2015';
var shortProps = {
	name
};

console.log(shortProps.name); // EcmaScript 2015


// Calculated properties
var count = 1;
var calcProps = {
	['Prop' + (() => count)()]: count++,
	['Prop' + (() => count)()]: count++,
	['Prop' + (() => count)()]: count++
};

console.log(Object.getOwnPropertyNames(calcProps)); // [ 'Prop1', 'Prop2', 'Prop3' ]