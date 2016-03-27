'use strict';

// Babel: Impossible due to ES5 limitations

var target = {};
var handler = {
	get: function (receiver, name) {
		return 'Proxy: ' + name;
	}
}

var proxy = new Proxy(target, handler);

console.log(proxy.TechDays);  // Proxy: TechDays