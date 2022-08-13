/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-unused-vars:warn */

'use strict';

const p1 = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Resolved'), 2000);
  });
const p2 = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => reject('Rejected'), 1000);
  });

p1()
  .then(x => console.log('Success p1: ' + x))
  .catch(err => console.log('Fail p1: ' + err));

p2()
  .then(x => console.log('Success p2: ' + x))
  .catch(err => console.log('Fail p2: ' + err));

// Alternative syntax:
//p1().then(x => console.log('Success p1 (alternative): ' + x), err => console.log('Fail p1 (alternative): ' + err));
//p2().then(x => console.log('Success p2 (alternative): ' + x), err => console.log('Fail p2 (alternative): ' + err));

console.log('End of file...');
