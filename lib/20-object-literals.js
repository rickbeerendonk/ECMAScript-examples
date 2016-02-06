"use strict";

// Methods (no "function")

var _obj, _calcProps;

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shortMethods = _obj = {
	toString: function toString() {
		return "-> " + _get(Object.getPrototypeOf(_obj), "toString", this).call(this);
	}
};

// Prototype
var objProto = {
	__proto__: shortMethods
};

console.log(objProto.toString()); // -> [object Object]

// Short properties
var name = "EcmaScript 2015";
var shortProps = {
	name: name
};

console.log(shortProps.name); // EcmaScript 2015

// Calculated properties
var count = 1;
var calcProps = (_calcProps = {}, _defineProperty(_calcProps, "Prop" + function () {
	return count;
}(), count++), _defineProperty(_calcProps, "Prop" + function () {
	return count;
}(), count++), _defineProperty(_calcProps, "Prop" + function () {
	return count;
}(), count++), _calcProps);

console.log(Object.getOwnPropertyNames(calcProps)); // [ 'Prop1', 'Prop2', 'Prop3' ]