"use strict";

// Pre-strawman!

function progress() {
	this.state += "...";
	return this;
}

var obj = {
	state: "busy"
};

console.log(typeof progress.bind(obj)); // "function"
console.log(progress.call(obj).state); // "busy.."