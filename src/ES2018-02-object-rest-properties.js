/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

'use strict';

const obj = {
  name: 'EcmaScript',
  year: 2018,
  final: true
};

let { name, ...other } = obj;

console.log(name); // EcmaScript
console.log(other); // { year: 2018, final: true }
