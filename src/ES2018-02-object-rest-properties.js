'use strict';

const name = 'EcmaScript';
const obj = {
	year: 2018,
	final: true
};

let composed = { name, ...obj };

console.log(composed);  // { name: "EcmaScript", year: 2018, final: true }
