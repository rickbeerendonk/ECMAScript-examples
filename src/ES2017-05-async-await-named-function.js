'use strict';

// Babel:

//require('babel-polyfill');

var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		return resolve('Resolved');
	}, 2000);
});
var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		return reject('Rejected');
	}, 1000);
});

async function handle() {
	try {
		const p1result = await p1;
		console.log('p1: ' + p1result);

		const p2result = await p2;
		console.log('p2: ' + p2result);
	} catch (err) {
		console.log('error: ' + err);
	}
};

// An async function returns a promise:
let p = handle();

// Proof that it is indeed a promise:
console.log(p.constructor.name);

// We can wait for the handle() function to resolve.
p.then(() => console.log('finished with handle()'));

console.log('End of file...');