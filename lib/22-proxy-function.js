"use strict";

// Babel: Impossible due to ES5 limitations

var target = function target() {
	return "Target!";
};
var handler = {
	apply: function apply(receiver) {
		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return "Proxy!";
	}
};

var proxy = new Proxy(target, handler);

console.log(proxy()); // Proxy!