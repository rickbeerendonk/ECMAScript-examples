/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Creating a RangeError
var rangeError = new RangeError('Value is out of range');
console.log(rangeError.name); // "RangeError"
console.log(rangeError.message); // "Value is out of range"
console.log(rangeError instanceof RangeError); // true

// RangeError is also an Error
console.log(rangeError instanceof Error); // true

// Throwing RangeError
try {
  new Array(-1); // Negative array length should throw
} catch (e) {
  console.log(e.name); // "RangeError"
}

// toFixed with out-of-range parameter
try {
  var num = 123;
  num.toFixed(-1); // Negative digits should throw
} catch (e) {
  console.log(e.name); // "RangeError"
}

// toPrecision with invalid precision
try {
  var num2 = 123;
  num2.toPrecision(0); // Precision must be at least 1
} catch (e) {
  console.log(e.name); // "RangeError"
}

// parseInt with invalid radix
try {
  parseInt('10', 1); // Radix must be 2-36
} catch (e) {
  console.log(e.name); // "RangeError"
}

// Custom range validation
function validateAge(age) {
  if (age < 0 || age > 150) {
    throw new RangeError('Age must be between 0 and 150');
  }
  return true;
}

try {
  validateAge(200);
} catch (e) {
  console.log(e.name + ': ' + e.message); // "RangeError: Age must be between 0 and 150"
}

// Successful validation
try {
  validateAge(25);
  console.log('Age is valid'); // This executes
} catch (e) {
  console.log(e.message);
}

// toString() method
console.log(rangeError.toString()); // "RangeError: Value is out of range"
