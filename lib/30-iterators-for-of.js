'use strict';

/*
interface IteratorResult {
	done: boolean;
	value: any;
}
interface Iterator {
	next(): IteratorResult;
}
interface Iterable {
	[Symbol.iterator](): Iterator;
}
*/

// Babel:

import 'babel-polyfill';

let test = {
	[Symbol.iterator]() {
		let current = 0;
		return {
			next() {
				current++;
				return { done: false, value: current };
			}
		};
	}
};

for (var n of test) {
	if (n > 10) {
		break;
	}
	console.log(n);
} // 1, 2, 3, ... , 10