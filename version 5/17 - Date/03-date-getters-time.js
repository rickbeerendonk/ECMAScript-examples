/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var date = new Date(2026, 0, 2, 14, 30, 45, 500);

// Get hours (0-23)
var hours = date.getHours();
console.log(hours); // 14

// Get minutes (0-59)
var minutes = date.getMinutes();
console.log(minutes); // 30

// Get seconds (0-59)
var seconds = date.getSeconds();
console.log(seconds); // 45

// Get milliseconds (0-999)
var milliseconds = date.getMilliseconds();
console.log(milliseconds); // 500

// Midnight
var midnight = new Date(2026, 0, 1, 0, 0, 0);
console.log(midnight.getHours()); // 0

// Noon
var noon = new Date(2026, 0, 1, 12, 0, 0);
console.log(noon.getHours()); // 12

// Late night
var late = new Date(2026, 0, 1, 23, 59, 59);
console.log(late.getHours()); // 23
console.log(late.getMinutes()); // 59
console.log(late.getSeconds()); // 59
