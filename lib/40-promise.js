"use strict";

// Babel:

require("babel/polyfill");

var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		return resolve("Resolved");
	}, 2000);
});
var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		return reject("Rejected");
	}, 1000);
});

p1.then(function (x) {
	return console.log("Success: " + x);
}).catch(function (e) {
	return console.log("Fail: " + e);
});
p2.then(function (x) {
	return console.log("Success: " + x);
}).catch(function (e) {
	return console.log("Fail: " + e);
});

// Alternative syntax:
p1.then(function (x) {
	return console.log("Success: " + x);
}, function (e) {
	return console.log("Fail: " + e);
});
p2.then(function (x) {
	return console.log("Success: " + x);
}, function (e) {
	return console.log("Fail: " + e);
});

console.log("End of file...");