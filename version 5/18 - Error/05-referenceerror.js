/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Creating a ReferenceError
var refError = new ReferenceError('Variable not defined');
console.log(refError.name); // "ReferenceError"
console.log(refError.message); // "Variable not defined"
console.log(refError instanceof ReferenceError); // true

// ReferenceError is also an Error
console.log(refError instanceof Error); // true
