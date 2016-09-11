'use strict';

function test(...a) {
	console.log('Rest:');
	console.log(a);
	console.log(a.length);
	console.log(Array.isArray(a));   // [1, "EcmaScript", 2017]
	
	// ES6 FireFox: SyntaxError: 'arguments' object may not be used in conjunction with a rest parameter
	// ES6 Chrome, Edge & Babel: <ok>
	console.log('Arguments:');
	console.log(arguments);
	console.log(arguments.length);
	console.log(Array.isArray(arguments));
}

test(1, 'EcmaScript', 2017);
