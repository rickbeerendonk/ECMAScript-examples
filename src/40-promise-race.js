'use strict';

// Babel:
//import 'babel-polyfill';

let p1 = new Promise(function(resolve, reject) {
	 	setTimeout(() => resolve('Server result'), 4000);
	 });
let p2 = new Promise(function(resolve, reject) { 
		setTimeout(() => resolve('Cache result'), 2000); 
	});
//let p3 = new Promise(function(resolve, reject) { 
//		setTimeout(() => reject('Rejected 3'), 1500); 
//	});

Promise
.race([p1, p2 /*, p3 */])
	.then(text => console.log('Update user interface with result from either server or cache:', JSON.stringify(text)))
	.catch(err => console.log('Fail:', err));

p1.then(text => console.log('Update cache with server result:', text));
	
console.log('End of file...');
