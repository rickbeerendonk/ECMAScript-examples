'use strict';

// Methods (no 'function')
let shortMethods = {
	toString() {
		return '-> ' + super.toString();
	}
}

// Prototype
let objProto = {
	__proto__: shortMethods
}

console.log(objProto.toString());  // -> [object Object]


// Short properties
let name = 'EcmaScript 2015';
let shortProps = {
	name
}

console.log(shortProps.name); // EcmaScript 2015


// Calculated properties
let count = 1;
let calcProps = {
	['Prop' + (() => count)()]: count++,
	['Prop' + (() => count)()]: count++,
	['Prop' + (() => count)()]: count++	
}

console.log(Object.getOwnPropertyNames(calcProps));  // [ 'Prop1', 'Prop2', 'Prop3' ]
