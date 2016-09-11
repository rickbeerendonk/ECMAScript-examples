'use strict';

// Babel: Undefined
// Chrome: Undefined (not-strict) & SyntaxError (strict)
// FireFox: Undefined
// Edge: Error
//console.log(a);

// Chrome: Requires strict mode
// FireFox: Requires flag
// Edge: 

let a = 1;

if (true) {

	//console.log(a);  // ?

	let a = 2;

	console.log(a); // 2
}

console.log(a); // 1