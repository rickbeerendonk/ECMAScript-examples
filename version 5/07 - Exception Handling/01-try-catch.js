/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-unreachable: warn */

try {
  console.log('before error');
  throw 'Something went wrong';
  console.log('after error');
} catch (err) {
  console.log('There was an error: ' + err);
}
