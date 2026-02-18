/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Creating an Error object (base class for all errors)
var error = new Error('Something went wrong');
console.log(error); // Error: Something went wrong

// Error properties
console.log(error.name); // "Error"
console.log(error.message); // "Something went wrong"

// Error without message
var errorNoMsg = new Error();
console.log(errorNoMsg.message); // ""

// Throw and catch
try {
  throw new Error('Custom error message');
} catch (e) {
  console.log(e.name); // "Error"
  console.log(e.message); // "Custom error message"
  console.log(e instanceof Error); // true
}

// Error can be created without new (but it's recommended to use new)
var error2 = Error('Another error');
console.log(error2 instanceof Error); // true

// toString() on error
var error3 = new Error('An error occurred');
console.log(error3.toString()); // "Error: An error occurred"

// Creating custom error with properties
var customError = new Error('Custom');
customError.code = 'CUSTOM_ERROR';
console.log(customError.code); // "CUSTOM_ERROR"

// Error in a try-catch-finally block
try {
  throw new Error('Test error');
} catch (e) {
  console.log('Caught: ' + e.message);
} finally {
  console.log('Finally block executes');
}

// Checking if something is an Error
var obj = { message: 'Not an error' };
console.log(obj instanceof Error); // false

var realError = new Error();
console.log(realError instanceof Error); // true
