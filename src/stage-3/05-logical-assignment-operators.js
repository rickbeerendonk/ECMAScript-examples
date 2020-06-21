/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-logical-assignment

'use strict';

let a;
const b = 2;
console.log('b =', b);

// a || (a = b)

a = 0;
console.log('a =', a, ' a ||= b:', (a ||= b)); // 2
console.log('a =', a); // 2

a = 1;
console.log('a =', a, ' a ||= b:', (a ||= b)); // 1
console.log('a =', a); // 1

// a && (a = b);

a = 0;
console.log('a =', a, ' a &&= b:', (a &&= b)); // 0
console.log('a =', a); // 0

a = 1;
console.log('a =', a, ' a &&= b:', (a &&= b)); // 2
console.log('a =', a); // 2

// a ?? (a = b);

a = null;
console.log('a =', a, ' a ??= b:', (a ??= b)); // 2
console.log('a =', a); // 2

a = 1;
console.log('a =', a, ' a ??= b:', (a ??= b)); // 1
console.log('a =', a); // 1
