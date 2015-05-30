"use strict";

// Babel:
require("babel/polyfill");

var p1 = new Promise(function(resolve, reject) {
	 	setTimeout(() => resolve("1"), 2000);
	 });
var p2 = new Promise(function(resolve, reject) { 
		setTimeout(() => reject("2"), 1000); 
	});

var r1 = p1.then(x => console.log("Success: " + x)).catch(e => console.log("Fail: " + e));
var r2 = p2.then(x => console.log("Success: " + x)).catch(e => console.log("Fail: " + e));
