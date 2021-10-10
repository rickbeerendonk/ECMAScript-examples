/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

var d = new Date();

console.log(d.toString()); // Sun Oct 10 2021 10:40:59 GMT+0200 (Central European Summer Time)
console.log(d.toDateString()); // Sun Oct 10 2021
console.log(d.toTimeString()); // 10:40:59 GMT+0200 (Central European Summer Time)

console.log(d.toLocaleString()); // 10/10/2021, 10:40:59
console.log(d.toLocaleDateString()); // 10/10/2021
console.log(d.toLocaleTimeString()); // 10:40:59

console.log(d.toUTCString()); // Sun, 10 Oct 2021 08:40:59 GMT
