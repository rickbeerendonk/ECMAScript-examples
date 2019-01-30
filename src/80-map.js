/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Babel:
//import 'babel-polyfill';

function logIterator(iterator) {
  let s = '';
  for (let v of iterator) {
    s += v + '; ';
  }
  console.log(s);
}

let map = new Map([['A', 111], ['B', 222]]);
map.set('C', 333);

logIterator(map.keys()); // A; B; C
logIterator(map.values()); // 111; 222; 333
logIterator(map.entries()); // A,111; B,222; C,333

console.log('');
console.log(map.get('A')); // 111
console.log(map.size); // 3

map.delete('A');
console.log(map.get('A')); // undefined
console.log(map.size); // 2

map.clear();
console.log(map.size); // 0
