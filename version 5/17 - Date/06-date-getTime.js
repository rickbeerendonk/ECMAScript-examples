/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var date = new Date(2026, 0, 2, 14, 30, 0);

// Get time as milliseconds since epoch (January 1, 1970)
var timestamp = date.getTime();
console.log(timestamp); // Large number (milliseconds since epoch)

// valueOf() returns the same as getTime()
var value = date.valueOf();
console.log(value); // Same as timestamp
console.log(timestamp === value); // true

// Using getTime() for date arithmetic
var date1 = new Date(2026, 0, 1);
var date2 = new Date(2026, 0, 8);
var diffMs = date2.getTime() - date1.getTime();
var diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(diffDays); // 7 (days between)

// Compare dates using getTime()
var now = new Date();
var date3 = new Date(2025, 0, 1);
console.log(now.getTime() > date3.getTime()); // true (now is after Jan 1, 2025)

// Epoch
var epoch = new Date(0);
console.log(epoch.getTime()); // 0

// Set time using setTime
var date4 = new Date();
date4.setTime(1609459200000);
console.log(date4.toDateString()); // Fri Jan 01 2021 (or similar, depends on timezone)
