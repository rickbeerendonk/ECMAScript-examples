/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-unused-vars:warn */

'use strict';

const p1 = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Server result'), 4000);
  });
const p2 = () =>
  new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Cache result'), 2000);
  });
//const p3 = () => new Promise(function(resolve, reject) {
//		setTimeout(() => reject('Timeout'), 1500);
//	});

const p1return = p1();

Promise.race([p1return, p2() /*, p3() */])
  .then(text =>
    console.log(
      'Update user interface with result from either server or cache:',
      JSON.stringify(text)
    )
  )
  .catch(err => console.log('Fail:', err));

p1return.then(text => console.log('Update cache with server result:', text));

console.log('End of file...');
