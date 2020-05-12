/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

const language = 'en';

let lib;
switch (language) {
  case 'es': {
    lib = './01-1-dynamic-import-default_es.js';
    break;
  }
  default: {
    lib = './01-1-dynamic-import-default_en.js';
  }
}

import(lib)
  .then(module => console.log(module.default()))
  .catch(error => console.error(error));
