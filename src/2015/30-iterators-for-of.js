/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

/*
interface IteratorResult {
	done: boolean;
	value: any;
}
interface Iterator {
	next(): IteratorResult;
}
interface Iterable {
	[Symbol.iterator](): Iterator;
}
*/

// Babel:
//import 'babel-polyfill';

let test = {
  [Symbol.iterator]() {
    let current = 0;
    return {
      next() {
        current++;
        return { done: false, value: current };
      }
    };
  }
};

for (let n of test) {
  if (n > 10) {
    break;
  }
  console.log(n);
} // 1, 2, 3, ... , 10
