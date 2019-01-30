/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

'use strict';

// Babel:

//require('babel-polyfill');

var p1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    return resolve('Resolved');
  }, 2000);
});
var p2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    return reject('Rejected');
  }, 1000);
});

(async () => {
  const p1result = await p1;
  console.log('p1: ' + p1result);

  try {
    const p2result = await p2;
    console.log('p2: ' + p2result);
  } catch (e) {
    console.log('p2 error: ' + e);
  }
})();

console.log('End of file...');
