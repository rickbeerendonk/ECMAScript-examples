/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

const a = () => 'EcmaScript';

const b = (x) => x * x;
const c = x => x * x;  // Omit ()
const d = x => {
    const y = x * x;
    return y;
}; // Add { ...; return ...; }

const e = (x, y) => x * y;

console.log(a());     // EcmaScript
console.log(b(2));    // 4
console.log(c(3));    // 9
console.log(d(4));    // 16
console.log(e(5, 6)); // 30
