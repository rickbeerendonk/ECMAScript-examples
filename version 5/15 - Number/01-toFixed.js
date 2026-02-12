/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var num = 123.456;
console.log(num.toFixed()); // "123"      (no decimals, returns string)
console.log(num.toFixed(2)); // "123.46"   (2 decimal places, rounding)
console.log(num.toFixed(4)); // "123.4560" (4 decimal places)

// Rounding
console.log((1.04).toFixed(1)); // "1.0"
console.log((1.05).toFixed(1)); // "1.1"

// Used for currency formatting
var price = 19.5;
console.log('€ ' + price.toFixed(2)); // "€ 19.50"
