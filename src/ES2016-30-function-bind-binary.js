"use strict";

// Pre-strawman!

function progress() { 
	this.state += "..."; 
	return this; 
}

var obj = {
	state: "busy"
};

console.log(typeof obj::progress);   // "function"
console.log(obj::progress().state);  // "busy.."
