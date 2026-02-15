/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Without global flag - returns first match
var str = 'hello123world456';
console.log(str.match(/\d+/)); // [ '123', index: 5, input: 'hello123world456', groups: undefined ]

// With global flag - returns all matches
console.log(str.match(/\d+/g)); // ["123", "456"]

// No match returns null
console.log('hello'.match(/\d+/)); // null

// With capturing groups
var text = '2015-01-15 2016-02-20';
console.log(text.match(/(\d{4})-(\d{2})-(\d{2})/));
// [
//   '2015-01-15',
//   '2015',
//   '01',
//   '15',
//   index: 0,
//   input: '2015-01-15 2016-02-20',
//   groups: undefined
// ]

// Global with capturing groups
console.log(text.match(/(\d{4})-(\d{2})-(\d{2})/g)); // ["2015-01-15", "2016-02-20"]
