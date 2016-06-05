'use strict';

console.log(['a', 'b'].includes('a')); // true
console.log(['a', 'b'].includes('c')); // false

console.log([NaN].includes(NaN)); // true

console.log([-0].includes(+0)); // true