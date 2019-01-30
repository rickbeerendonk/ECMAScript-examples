/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Nested: Object in array
function test([value, { name, version }, year]) {
  console.log(value); // 1
  console.log(name); // EcmaScript
  console.log(version); // 6
  console.log(year); // 2017
}

const obj = {
  name: 'EcmaScript',
  year: 2015,
  version: 6
};

const data = [1, obj, 2017];

test(data);
