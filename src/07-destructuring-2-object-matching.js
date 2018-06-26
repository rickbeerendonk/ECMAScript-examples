'use strict';

let obj = {
	committee: 'TC39',
	name: 'EcmaScript',
	edition: { version: 6, year: 2015 },
	website: 'https://github.com/tc39'
};

let { committee, name: officialName, edition: { year } } = obj;

console.log(committee); // 'TC39'
console.log(officialName); // 'EcmaScript'
console.log(year); // 2015
