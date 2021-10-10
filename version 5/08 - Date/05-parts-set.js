/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

var d = new Date();

// Local
console.log(d.setFullYear(2000)); // Returns: Milliseconds since 1970
console.log(d.setMonth(1));
console.log(d.setDate(2));
console.log(d.setHours(3));
console.log(d.setMinutes(4));
console.log(d.setSeconds(5));
console.log(d.setMilliseconds(6));

// UTC
console.log(d.setUTCFullYear(1990));
console.log(d.setUTCMonth(1));
console.log(d.setUTCDate(2));
console.log(d.setUTCHours(3));
console.log(d.setUTCMinutes(4));
console.log(d.setUTCSeconds(5));
console.log(d.setUTCMilliseconds(6));
