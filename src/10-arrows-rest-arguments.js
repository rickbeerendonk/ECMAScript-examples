/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-undef:warn, no-unused-vars:warn */

'use strict';

const x = (a, b, ...rest) => [a, b, rest];
console.log(x(1, 2, 3, 4)); // [ 1, 2, [3, 4] ]

// Specs: Arguments should not exists
// Babel: Arguments exists
const y = (a, b, ...rest) => arguments;
console.log(y(1, 2, 3, 4));
