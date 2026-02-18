/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

'use strict';

// In strict mode, creating undeclared variables throws error
try {
  // This would throw: ReferenceError: x is not defined
  // x = 5;
  console.log('Undeclared variables not allowed');
} catch (e) {
  console.log('Error: ' + e.message);
}

// Variables must be declared
var y = 10;
console.log(y); // 10

// Deleting variables not allowed
try {
  // This would throw: SyntaxError
  // delete y;
  console.log('Cannot delete declared variables');
} catch (e) {
  console.log('Error: ' + e.message);
}

// eval() has different scope
console.log('eval code runs in strict mode too');
