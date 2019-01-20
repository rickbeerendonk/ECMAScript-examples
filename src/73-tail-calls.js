/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

function recursive(n) {
	if (n < 1) {
		return 'Done';
	}
	
	return recursive(n - 1);
}

// No stack overflow
console.log(recursive(1e5));