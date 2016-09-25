'use strict';

// Babel:
import 'babel-polyfill';

let obj = {
	name: 'EcmaScript',
	year: 2017,
	final: true
};

console.log(Object.values(obj)); // [ 'EcmaScript', 2017, true ]