"use strict";

// Babel: Undefined
// Chrome: Undefined (not-strict) & SyntaxError (strict)
// FireFox: Undefined
// Edge: Error
//console.log(a);

var a = 1;

if (true) {
	var _b = 2;

	// Babel: SyntaxError (compiler)
	// FF: SyntaxError
	// Chrome: <ignores statement> (non-strict) & TypeError(strict)
	// Edge: Error
	//b = 3;

	console.log(a); // 1
	console.log(_b); // 2
}

// Babel: ReferenceError
// Chrome: Undefined (not-strict) & SyntaxError (strict)
// FireFox: ReferenceError
// Edge: Error
console.log(b);