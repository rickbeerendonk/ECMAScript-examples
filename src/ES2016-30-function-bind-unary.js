"use strict";

// Pre-strawman!

var obj = {
	state: "busy",
	progress: function() {
		this.state += "...";
		return this;
	}
};

console.log(typeof ::obj.progress);   // "function"
console.log(::obj.progress().state);  // "busy..."
