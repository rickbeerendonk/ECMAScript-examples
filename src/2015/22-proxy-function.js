/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-unused-vars:warn */

'use strict';

// Babel: Impossible due to ES5 limitations

let func = function (s) {
  return 'Target: ' + s;
};

let handler = {
  apply: function (target, that, args) {
    return 'Proxy: ' + target.apply(that, args);
  }
};

let funcProxy = new Proxy(func, handler);

console.log(func('test')); // Target: test
console.log(funcProxy('test')); // Proxy: Target: test
