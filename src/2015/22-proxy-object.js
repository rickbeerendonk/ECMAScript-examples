/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Babel: Impossible due to ES5 limitations

let target = {
  techDays: 'TechDays'
};
let handler = {
  get(target, prop /*, receiver */) {
    return target[prop] + ' (changed through Proxy)';
  },
  set(target, prop, value /*, receiver */) {
    target[prop] = value + ' (changed through Proxy)';
    return true;
  }
};

let proxy = new Proxy(target, handler);

console.log(proxy.techDays); // TechDays (changed through Proxy)

proxy.techDays = 'test';

console.log(target.techDays); // test (changed through Proxy)
