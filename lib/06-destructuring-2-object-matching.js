"use strict";

var obj = {
	name: "EcmaScript",
	year: 2015,
	version: 6
};

var a = obj.name;
var year = obj.year;

// ES7: let ({name: a, year, ...rest} = obj);

console.log(a);
console.log(year);
// ES7: console.log(rest);