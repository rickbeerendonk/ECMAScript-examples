/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Babel:
//import '@babel/polyfill';

function* generator1() {
  yield 'a';
  yield 'b';
  yield 'c';
}

function* generator2() {
  yield 1;
  yield 2;
  yield* generator1();
  yield 3;
  yield 4;
}

for (const item of generator1()) {
  console.log(item);
}

console.log('--');

for (const item of generator2()) {
  console.log(item);
}

/*

a
b
c
--
1
2
a
b
c
3
4

*/
