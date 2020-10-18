/*! European Union Public License version 1.2 !*/
/*! Copyright © 2016 Rick Beerendonk          !*/

'use strict';

console.log(['a', 'b'].includes('a')); // true
console.log(['a', 'b'].includes('c')); // false

console.log([NaN].includes(NaN)); // true

console.log([-0].includes(+0)); // true

/// BONUS: Use case

const color = 'green';
console.log(['red', 'green', 'blue'].includes(color)); // true
