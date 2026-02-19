/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Creating a SyntaxError
var syntaxError = new SyntaxError('Invalid syntax');
console.log(syntaxError.name); // "SyntaxError"
console.log(syntaxError.message); // "Invalid syntax"
console.log(syntaxError instanceof SyntaxError); // true

// SyntaxError is also an Error
console.log(syntaxError instanceof Error); // true

// Invalid JSON throws SyntaxError
try {
  JSON.parse('{invalid json}'); // Missing quotes around property names
} catch (e) {
  console.log(e.name); // "SyntaxError"
}

// Invalid JSON array
try {
  JSON.parse('[1, 2, 3,]'); // Trailing comma is invalid
} catch (e) {
  console.log(e.name); // "SyntaxError"
}

// Invalid JSON value
try {
  JSON.parse('{"value": undefined}'); // undefined is not valid JSON
} catch (e) {
  console.log(e.name); // "SyntaxError"
}

// Creating SyntaxError manually
function parseCustomFormat(str) {
  if (str[0] !== '{' || str[str.length - 1] !== '}') {
    throw new SyntaxError('String must start with { and end with }');
  }
  return true;
}

try {
  parseCustomFormat('[1, 2, 3]');
} catch (e) {
  console.log(e.name + ': ' + e.message); // "SyntaxError: String must start with { and end with }"
}
