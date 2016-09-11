'use strict';

function test() {
	return ['One', 'Two'];
}

let [a, b] = test();

console.log(a); // One
console.log(b); // Two