/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

let x = '\u{1F437}'; // console.log('\u{1F4A9}')

console.log(x);

console.log(x.length); // 2
console.log(x.charCodeAt(0) + '  ' + x.codePointAt(0) + '  ' + x[0]); // 55357  128055  <D83D unprintable>
console.log(x.charCodeAt(1) + '  ' + x.codePointAt(1) + '  ' + x[1]); // 56375  56375  <DC37 unprintable>

// True
console.log(x.startsWith('\u{1F437}'));

// ES6 (FF + Chrome): True
// Babel: False
console.log(x.startsWith('\uD83D'));
