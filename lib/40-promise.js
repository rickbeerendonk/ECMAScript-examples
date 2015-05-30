"use strict";

// Babel:
require("babel/polyfill");

var p1 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		return resolve("1");
	}, 2000);
});
var p2 = new Promise(function (resolve, reject) {
	setTimeout(function () {
		return reject("2");
	}, 1000);
});

var r1 = p1.then(function (x) {
	return console.log("Success: " + x);
})["catch"](function (e) {
	return console.log("Fail: " + e);
});
var r2 = p2.then(function (x) {
	return console.log("Success: " + x);
})["catch"](function (e) {
	return console.log("Fail: " + e);
});