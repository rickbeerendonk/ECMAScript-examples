/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var pattern = /hello/;
console.log(pattern.test('hello world')); // true
console.log(pattern.test('goodbye')); // false

// Case-insensitive test
var insensitive = /hello/i;
console.log(insensitive.test('HELLO')); // true
console.log(insensitive.test('Hello')); // true

// Email validation pattern
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(emailPattern.test('user@example.com')); // true
console.log(emailPattern.test('invalid-email')); // false

// Pattern with special characters
var digitPattern = /\d+/;
console.log(digitPattern.test('abc123')); // true
console.log(digitPattern.test('abc')); // false
