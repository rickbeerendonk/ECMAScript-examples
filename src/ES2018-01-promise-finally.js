/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

'use strict';

// Babel:
//import 'babel-polyfill';

let p1 = new Promise(function(resolve, reject) {
  setTimeout(() => resolve('Resolved'), 2000);
});
let p2 = new Promise(function(resolve, reject) {
  setTimeout(() => reject('Rejected'), 1000);
});

p1.then(x => console.log('Success p1: ' + x))
  .catch(e => console.log('Fail p1: ' + e))
  .finally(() => console.log('Finally p1'));

p2.then(x => console.log('Success p2: ' + x))
  .catch(e => console.log('Fail p2: ' + e))
  .finally(() => console.log('Finally p2'));

console.log('End of file...');
