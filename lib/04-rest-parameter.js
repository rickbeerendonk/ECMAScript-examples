"use strict";

function test() {
	for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
		a[_key] = arguments[_key];
	}

	console.log("Rest:");
	console.log(a);
	console.log(a.length);
	console.log(Array.isArray(a));

	// ES6 FireFox: SyntaxError: 'arguments' object may not be used in conjunction with a rest parameter
	// ES6 Chrome, Edge & Babel: <ok>
	console.log("Arguments:");
	console.log(arguments);
	console.log(arguments.length);
	console.log(Array.isArray(arguments));
}

test(1, "TechDays", 2015);