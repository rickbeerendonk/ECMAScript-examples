/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

'use strict';

// Babel:
//import 'babel-polyfill';

console.log();
console.log('padStart');
console.log();

console.log('0'.padStart(3));  // '  0'

console.log('000'.padStart(1, '1'));  // 000
console.log('000'.padStart(3, '1'));  // 000
console.log('000'.padStart(5, '1'));  // 11000

console.log('000'.padStart(5, '123'));  // 12000
console.log('000'.padStart(7, '123'));  // 1231000

console.log();
console.log('padEnd');
console.log();

console.log('0'.padEnd(3));  // '0  '

console.log('000'.padEnd(1, '1'));  // 000
console.log('000'.padEnd(3, '1'));  // 000
console.log('000'.padEnd(5, '1'));  // 00011

console.log('000'.padEnd(5, '123'));  // 00012
console.log('000'.padEnd(7, '123'));  // 0001231

