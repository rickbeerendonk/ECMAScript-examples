/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

// Babel: Impossible due to ES5 limitations

let obj = {
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

let objProxy = new Proxy(obj, handler);

console.log(objProxy.techDays); // TechDays (changed through Proxy)

objProxy.techDays = 'test';

console.log(obj.techDays); // test (changed through Proxy)
