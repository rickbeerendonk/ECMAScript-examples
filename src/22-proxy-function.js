'use strict';

// Babel: Impossible due to ES5 limitations

var target = function() { return 'Target!' };
var handler = {
	apply: function (receiver, ...args) {
		return 'Proxy!';
	}	
};

var proxy = new Proxy(target, handler);

console.log(proxy());  // Proxy!