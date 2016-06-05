'use strict';

// Babel: Impossible due to ES5 limitations

var target = function target() {
	return 'Target!';
};
var handler = {
	apply: function apply(receiver) {
		return 'Proxy!';
	}
};

var proxy = new Proxy(target, handler);

console.log(proxy()); // Proxy!