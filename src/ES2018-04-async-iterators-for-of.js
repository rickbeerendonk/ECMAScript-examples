'use strict';

// Babel:
//import 'babel-polyfill';

const test = {
	[Symbol.asyncIterator]: function() {
		let current = 0;
		return {
			next() {
				current++;
				return Promise.resolve({ done: false, value: current });
			}
		}
	}
};

(async function () {
	for await (let n of test) {
		if (n > 10) {
			break;
		}
		console.log(n);
	} // 1, 2, 3, ... , 10
})();