/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-unreachable: warn */

try {
  console.log('before error');
  throw 'Something went wrong';
  console.log('after error');
} finally {
  console.log('after error & always executed');
}
