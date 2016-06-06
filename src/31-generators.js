'use strict';

// Babel:
import 'babel-polyfill';

let test = {
	[Symbol.iterator]: function*() {
		let current = 1;
		while (true) {
			yield current++;
		}
	}
}

for (var n of test) {
	if (n > 10) {
		break;
	}
	console.log(n);
}