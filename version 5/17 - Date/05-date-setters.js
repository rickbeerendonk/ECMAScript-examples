/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var date = new Date(2026, 0, 2);
console.log(date.toDateString()); // "Fri Jan 02 2026"

// Set full year
date.setFullYear(2027);
console.log(date.toDateString()); // "Sat Jan 02 2027"

// Set month (0-indexed)
date.setMonth(11); // December
console.log(date.toDateString()); // "Sat Dec 02 2027"

// Set date (day of month)
date.setDate(25);
console.log(date.toDateString()); // "Sat Dec 25 2027"

// Modify multiple components at once
date.setFullYear(2026, 0, 1); // Can set year, month, date
console.log(date.toDateString()); // "Fri Jan 01 2026"

// Month wrap-around (December + 1 = January next year)
var date2 = new Date(2026, 11, 31);
date2.setMonth(12);
console.log(date2.toDateString()); // "Fri Jan 31 2027"

// Date wrap-around
var date3 = new Date(2026, 0, 31);
date3.setDate(32);
console.log(date3.toDateString()); // "Sat Feb 01 2026"

// Negative numbers (going back)
var date4 = new Date(2026, 0, 15);
date4.setDate(0); // Goes to last day of previous month
console.log(date4.toDateString()); // "Thu Dec 31 2025"

// Set time components
var date5 = new Date(2026, 0, 2, 10, 0, 0);
date5.setHours(14);
console.log(date5.toTimeString()); // Shows time with hours changed

date5.setMinutes(30);
date5.setSeconds(45);
console.log(date5.toString()); // Full datetime string

// Set milliseconds
var date6 = new Date(2026, 0, 2, 0, 0, 0, 0);
date6.setMilliseconds(500);
console.log(date6.getMilliseconds()); // 500
