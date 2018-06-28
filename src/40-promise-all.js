'use strict';

// Babel:
//import 'babel-polyfill';

let p1 = new Promise(function(resolve, reject) {
	 	setTimeout(() => resolve('Resolved 1' ), 2000);
	 });
let p2 = new Promise(function(resolve, reject) { 
		setTimeout(() => resolve('Resolved 2'), 1000); 
	});
let p3 = new Promise(function(resolve, reject) { 
		setTimeout(() => reject('Rejected 3'), 1500); 
	});

Promise
	.all([p1, p2 /*, p3 */])
	.then(text => console.log('Success: ' + JSON.stringify(text)))
	.catch(err => console.log('Fail: ' + err));
	
console.log('End of file...');
