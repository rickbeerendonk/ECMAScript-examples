"use strict";

// Nested: Object in array
function test([value, {name, version}, year]) {
	console.log(value);   // 1
	console.log(name);    // EcmaScript
	console.log(version); // 6
	console.log(year);    // 2016
}

var obj = {
	name: "EcmaScript",
	year: 2015,
	version: 6
};

var data = [1, obj, 2016];

test(data);