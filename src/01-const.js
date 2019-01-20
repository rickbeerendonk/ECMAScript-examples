/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Babel: Undefined
// Chrome: ReferenceError: a is not defined
// FireFox: ReferenceError: can't access lexical declaration `a' before initialization
// Safari: ReferenceError: Cannot access uninitialized variable.
// Edge: ?
//console.log(a);

const a = 1;

if (true) {
	const b = 2;

	// Babel: SyntaxError: "b" is read-only (compiler)
	// Chrome: TypeError: Assignment to constant variable
	// FireFox: TypeError: invalid assignment to const 'b'
	// Safari: TypeError: Attempted to assign to readonly property.
	// Edge: ?
	//b = 3;

	console.log(a);  // 1
	console.log(b);  // 2
}

// Babel: ReferenceError
// Chrome: ReferenceError: b is not defined
// FireFox: ReferenceError: b is not defined
// Safari: ReferenceError: Can't find variable: b
// Edge: ?
console.log(b);
