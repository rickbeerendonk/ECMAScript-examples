"use strict";

// Babel:
require("babel/polyfill");

var p1 = new Promise(function(resolve, reject) {
	 	setTimeout(() => resolve("Resolved 1" ), 2000);
	 });
var p2 = new Promise(function(resolve, reject) { 
		setTimeout(() => resolve("Resolved 2"), 1000); 
	});
var p3 = new Promise(function(resolve, reject) { 
		setTimeout(() => reject("Rejected 3"), 1500); 
	});

Promise
	.all([p1, p2 /*, p3 */])
	.then(x => console.log("Success: " + x)).catch(e => console.log("Fail: " + e));
	
console.log("End of file...");
