/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Babel: Impossible due to ES5 limitations

let target = {
  techDays: 'TechDays-Original'
};
let handler = {
  get: function(receiver, name) {
    return 'Proxy: ' + name + ' (real value: ' + receiver[name] + ')';
  }
};

let proxy = new Proxy(target, handler);

console.log(proxy.techDays); // Proxy: techDays (real value: TechDays-Original)
