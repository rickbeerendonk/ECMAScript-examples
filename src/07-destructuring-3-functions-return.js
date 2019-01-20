/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

function test() {
	return ['One', 'Two'];
}

let [a, b] = test();

console.log(a);  // One
console.log(b);  // Two
