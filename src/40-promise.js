'use strict';

// Babel:
//import 'babel-polyfill';

let p1 = new Promise(function(resolve, reject) {
	 	setTimeout(() => resolve('Resolved'), 2000);
	 });
let p2 = new Promise(function(resolve, reject) { 
		setTimeout(() => reject('Rejected'), 1000); 
	});

p1.then(x => console.log('Success: ' + x)).catch(err => console.log('Fail: ' + err));
p2.then(x => console.log('Success: ' + x)).catch(err => console.log('Fail: ' + err));

// Alternative syntax:
p1.then(x => console.log('Success: ' + x), err => console.log('Fail: ' + err));
p2.then(x => console.log('Success: ' + x), err => console.log('Fail: ' + err));

console.log('End of file...');
