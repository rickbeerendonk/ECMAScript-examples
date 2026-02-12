/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 1. encodeURI encodes special characters but preserves reserved URI characters
var uri = 'http://example.com/path with spaces/file.html';
var encoded = encodeURI(uri);
console.log(encoded); // "http://example.com/path%20with%20spaces/file.html"

// 2. Decoding
var decoded = decodeURI(encoded);
console.log(decoded); // "http://example.com/path with spaces/file.html"

// 3. Round trip
var original = 'http://example.com/doc?lang=en&version=1.0';
var encoded2 = encodeURI(original);
var decoded2 = decodeURI(encoded2);
console.log(original === decoded2); // true

// 6. Difference: encodeURI preserves more characters than encodeURIComponent
//    Why do both exist?
//    encodeURI is for full URIs, encodeURIComponent is for URI components (e.g., query parameters)
var component = 'key=value&other=123';
console.log(encodeURI(component)); // "key=value&other=123" (reserved chars kept)
console.log(encodeURIComponent(component)); // "key%3Dvalue%26other%3D123" (all special encoded)
