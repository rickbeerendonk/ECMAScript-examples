/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

let obj = {
  committee: 'TC39',
  name: 'EcmaScript',
  edition: { version: 6, year: 2015 },
  website: 'https://github.com/tc39'
};

let {
  committee,
  edition: { year },
  name: officialName,
  other = 'new'
} = obj;

console.log(committee); // 'TC39'
console.log(officialName); // 'EcmaScript'
console.log(year); // 2015
console.log(other); // 'new'
