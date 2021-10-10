/*! European Union Public License version 1.2 !*/
/*! Copyright © 2021 Rick Beerendonk          !*/

var d = new Date();

// Local
console.log(d.getFullYear()); // 2021
console.log(d.getMonth()); // 9 (= October, January = 0)
console.log(d.getDate()); // 10
console.log(d.getDay()); // 0 (= Sunday, Friday = 6)
console.log(d.getHours()); // 10
console.log(d.getMinutes()); // 40
console.log(d.getSeconds()); // 59
console.log(d.getMilliseconds()); // 476

// UTC
console.log(d.getUTCFullYear()); // 2021
console.log(d.getUTCMonth()); // 9 (= October, January = 0)
console.log(d.getUTCDate()); // 10
console.log(d.getUTCDay()); // 0 (= Sunday, Friday = 6)
console.log(d.getUTCHours()); // 8
console.log(d.getUTCMinutes()); // 40
console.log(d.getUTCSeconds()); // 59
console.log(d.getUTCMilliseconds()); // 476
