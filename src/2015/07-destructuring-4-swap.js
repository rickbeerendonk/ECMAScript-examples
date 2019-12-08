/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

let a = 'One';
let b = 'Two';

[a, b] = [b, a];

console.log(a); // Two
console.log(b); // One
