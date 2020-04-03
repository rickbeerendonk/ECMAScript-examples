/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-unused-vars:warn */

'use strict';

// Babel: Impossible due to ES5 limitations

let target = function (s) {
  return 'Target: ' + s;
};
let handler = {
  apply: function (receiver, ...args) {
    return 'Proxy: ' + args[1][0];
  }
};

let proxy = new Proxy(target, handler);

console.log(proxy('test')); // Proxy!
