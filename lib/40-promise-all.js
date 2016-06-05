'use strict';

// Babel:
require('babel/polyfill');

var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		return resolve('Resolved 1');
	}, 2000);
});
var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		return resolve('Resolved 2');
	}, 1000);
});
var p3 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		return reject('Rejected 3');
	}, 1500);
});

Promise.all([p1, p2 /*, p3 */]).then(function (x) {
	return console.log('Success: ' + x);
}).catch(function (e) {
	return console.log('Fail: ' + e);
});

console.log('End of file...');