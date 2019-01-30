/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

/* eslint no-unused-vars:warn */

'use strict';

// Babel:
//import 'babel-polyfill';

const test = {
  [Symbol.asyncIterator]: function() {
    let current = 0;
    return {
      next() {
        current++;
        return new Promise(function(resolve, reject) {
          setTimeout(
            () => resolve({ done: false, value: current }),
            1000 * Math.random()
          );
        });
      }
    };
  }
};

(async function() {
  for await (let n of test) {
    console.log(n);
    if (n >= 10) {
      break;
    }
  } // 1, 2, 3, ... , 10

  console.log('done');
})();

console.log('End of file...');
