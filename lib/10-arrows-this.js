'use strict';

function ES5Fail() {
	this.value = 0;

	setInterval(function () {
		this.value++;
	}, 1000);
}

function ES5Success() {
	var self = this;

	self.value = 0;

	setInterval(function () {
		self.value++;
	}, 1000);
}

function ES6Arrow() {
	this.value = 0;

	setInterval(() => this.value++, 1000);
}

var es5fail = new ES5Fail();
var es5success = new ES5Success();
var es6arrow = new ES6Arrow();

setInterval(function () {
	console.log(es5fail.value);
	console.log(es5success.value);
	console.log(es6arrow.value);
	console.log();
}, 1000);