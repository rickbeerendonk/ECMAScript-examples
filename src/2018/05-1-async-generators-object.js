/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

'use strict';

const test = {
  async *[Symbol.asyncIterator]() {
    try {
      let current = 1;
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.random()));
        yield current++;
      }
    } finally {
      console.log('User breaks out of the loop.');
    }
  }
};

(async function () {
  for await (let n of test) {
    console.log(n);
    if (n >= 10) {
      break;
    }
  }

  console.log('done');
})();

console.log('End of file...');
