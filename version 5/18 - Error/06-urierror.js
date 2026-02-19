/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Creating a URIError
var uriError = new URIError('URI malformed');
console.log(uriError.name); // "URIError"
console.log(uriError.message); // "URI malformed"
console.log(uriError instanceof URIError); // true

// URIError is also an Error
console.log(uriError instanceof Error); // true

// Invalid escape sequence in decodeURIComponent
try {
  decodeURIComponent('%'); // Incomplete escape sequence
} catch (e) {
  console.log(e.name); // "URIError"
}

// Invalid escape sequence in decodeURI
try {
  decodeURI('%'); // Incomplete escape sequence
} catch (e) {
  console.log(e.name); // "URIError"
}
