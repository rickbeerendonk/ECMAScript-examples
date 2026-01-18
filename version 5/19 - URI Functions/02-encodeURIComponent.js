/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/


// 1. encodeURIComponent encodes all special characters including reserved ones
var component = "key=value&other=123";
var encoded = encodeURIComponent(component);
console.log(encoded);                   // "key%3Dvalue%26other%3D123"

// 2. Decoding
var decoded = decodeURIComponent(encoded);
console.log(decoded);                   // "key=value&other=123"

// 3. Building query string
var params = {
  name: "John Doe",
  email: "john@example.com",
  message: "Hello & welcome!"
};

var queryString = "?" + 
  "name=" + encodeURIComponent(params.name) +
  "&email=" + encodeURIComponent(params.email) +
  "&message=" + encodeURIComponent(params.message);

console.log(queryString);
// "?name=John%20Doe&email=john%40example.com&message=Hello%20%26%20welcome%21"

// 4. Round trip
var original = "user@example.com with spaces & symbols!";
var enc = encodeURIComponent(original);
var dec = decodeURIComponent(enc);
console.log(original === dec);          // true

// 5. Decoding with error handling
try {
  var invalid = decodeURIComponent("%");
} catch (e) {
  console.log(e.name);                  // "URIError"
}
