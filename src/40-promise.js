'use strict';

// Babel:
require('babel/polyfill');

var p1 = new Promise(function(resolve, reject) {
	 	setTimeout(() => resolve('Resolved' ), 2000);
	 });
var p2 = new Promise(function(resolve, reject) { 
		setTimeout(() => reject('Rejected'), 1000); 
	});

p1.then(x => console.log('Success: ' + x)).catch(e => console.log('Fail: ' + e));
p2.then(x => console.log('Success: ' + x)).catch(e => console.log('Fail: ' + e));

// Alternative syntax:
p1.then(x => console.log('Success: ' + x), e => console.log('Fail: ' + e));
p2.then(x => console.log('Success: ' + x), e => console.log('Fail: ' + e));

console.log('End of file...');
