/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Babel: Impossible due to ES5 limitations

let target = function() { return 'Target!' };
let handler = {
	apply: function (receiver, ...args) {
		return 'Proxy!';
	}	
};

let proxy = new Proxy(target, handler);

console.log(proxy());  // Proxy!