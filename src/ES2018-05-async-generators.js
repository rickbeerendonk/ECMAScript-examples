'use strict';

// Babel:
//import 'babel-polyfill';

async function* asyncTest() {
	let current = 1;
	while (true) {
		yield current++;
	}
}

(async function () {
	for await (let n of asyncTest()) {
		console.log(n);
		if (n >= 10) {
			break;
		}
	}

	console.log('done');
})();