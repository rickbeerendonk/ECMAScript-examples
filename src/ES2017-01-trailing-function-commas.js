'use strict';

// Case 1: No error because of the trailing comma in parameters
function test(value, ) {
	console.log(value);
}

// Case 2: No error because of the trailing comma in arguments
console.log('test(1, )');
test(1, );  // 1
