/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Current date and time
var now = new Date();
console.log(now); // Current date/time in local timezone

// String representation
console.log(now.toString()); // Full string format

console.log(now.toISOString); // Note: toISOString doesn't exist in ES5

// Date from milliseconds since epoch
var epoch = new Date(0);
console.log(epoch); // Thu Jan 01 1970 00:00:00 GMT+0000

var timestamp = new Date(1609459200000); // Specific milliseconds since epoch
console.log(timestamp); // Fri Jan 01 2021 00:00:00 GMT+0000 (or similar)

// Date from year, month, day
var date1 = new Date(2026, 0, 2); // January 2, 2026 (month is 0-indexed)
console.log(date1); // Fri Jan 02 2026 00:00:00 GMT+0000 (or similar)

var date2 = new Date(2026, 11, 25, 18, 30, 45); // Dec 25, 2026 6:30:45 PM
console.log(date2); // Fri Dec 25 2026 18:30:45 GMT+0000 (or similar)

// Date from string
var dateFromString = new Date('2026-01-02');
console.log(dateFromString); // Fri Jan 02 2026 00:00:00 GMT+0000 (or similar)

// Without new, returns string
var dateString = Date();
console.log(typeof dateString); // "string"
console.log(dateString); // Current date/time as string
