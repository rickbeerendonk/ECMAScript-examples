'use strict';

// Babel:
//import 'babel-polyfill';

async function* asyncTest() {
	try {
		let current = 1;
		while (true) {
			yield current++;
		}
	}
	finally {
		console.log('User breaks out of the loop.');
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

console.log("End of file...");
