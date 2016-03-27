'use strict';

var obj = {
	name: 'EcmaScript',
	year: 2015,
	version: 6
};

let {name: a, year} = obj;
// ES7: let ({name: a, year, ...rest} = obj);

console.log(a);
console.log(year);
// ES7: console.log(rest);
