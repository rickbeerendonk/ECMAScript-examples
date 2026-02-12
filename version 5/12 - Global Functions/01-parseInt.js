/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 1. Parse decimal strings
console.log(parseInt('123')); // 123
console.log(parseInt('123.45')); // 123 (decimal part ignored)

// 2. Parse with radix (base)
console.log(parseInt('1010', 2)); // 10 (binary to decimal)
console.log(parseInt('FF', 16)); // 255 (hexadecimal to decimal)
console.log(parseInt('77', 8)); // 63 (octal to decimal)

// 3. Whitespace is trimmed
console.log(parseInt('  45  ')); // 45

// 4. Returns NaN if not a number
console.log(parseInt('hello')); // NaN

// 5. First non-numeric character stops parsing
console.log(parseInt('678abc')); // 678
