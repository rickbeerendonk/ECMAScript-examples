"use strict";

// Pre-strawman!

var obj = {
	state: "busy",
	progress: function progress() {
		this.state += "...";
		return this;
	}
};

console.log(typeof obj.progress.bind(obj)); // "function"
console.log(obj.progress.call(obj).state); // "busy..."