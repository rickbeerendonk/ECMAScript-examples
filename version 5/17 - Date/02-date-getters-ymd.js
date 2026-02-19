/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var date = new Date(2026, 0, 2, 14, 30, 45);

// Get full year (4 digits)
var year = date.getFullYear();
console.log(year); // 2026

// Get month (0-indexed, 0 = January)
var month = date.getMonth();
console.log(month); // 0 (January)

// Get day of month (1-31)
var day = date.getDate();
console.log(day); // 2
