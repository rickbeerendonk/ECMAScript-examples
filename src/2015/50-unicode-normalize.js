/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

let one = 'ë';
let two = 'e\u0308';
console.log(one.length); // 1
console.log(one.codePointAt(0)); // 235
console.log(two.length); // 2
console.log(two.codePointAt(0)); // 101
console.log(two.codePointAt(1)); // 776
console.log(one === two); // false
console.log(one.normalize() === two.normalize()); // true
