/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-undef:warn */

import { square } from './60-2-named-indirect-export';

console.log(square(3)); // 9
console.log(cube(3)); // ReferenceError
