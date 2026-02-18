/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var date = new Date(2026, 0, 2, 14, 30, 45);

// toString() - Full date and time with timezone
var fullString = date.toString();
console.log(fullString); // "Fri Jan 02 2026 14:30:45 GMT+0000"

// toDateString() - Just date part
var dateString = date.toDateString();
console.log(dateString); // "Fri Jan 02 2026"

// toTimeString() - Just time part
var timeString = date.toTimeString();
console.log(timeString); // "14:30:45 GMT+0000"

// toLocaleString() - Locale-specific format
var localeString = date.toLocaleString();
console.log(localeString); // Varies by locale (e.g., "1/2/2026, 14:30:45")

// toLocaleDateString() - Locale-specific date
var localeDateString = date.toLocaleDateString();
console.log(localeDateString); // Varies by locale (e.g., "1/2/2026")

// toLocaleTimeString() - Locale-specific time
var localeTimeString = date.toLocaleTimeString();
console.log(localeTimeString); // Varies by locale (e.g., "14:30:45")

// toUTCString() - UTC representation
var utcString = date.toUTCString();
console.log(utcString); // "Fri, 02 Jan 2026 14:30:45 GMT"
