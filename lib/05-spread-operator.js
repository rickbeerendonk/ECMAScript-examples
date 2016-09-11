'use strict';

function sum(a, b, c) {
	return a + b + c;
}

console.log(sum(...[3, 4, 5])); // 12

console.log([...'abcde'][2]); // c