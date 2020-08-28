/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

/* eslint no-constant-condition:off, no-undef:off */

'use strict';
//console.log(a);

const a = 1;

if (true) {
  const b = 2;
  //b = 3;

  console.log(a); // 1
  console.log(b); // 2
}
console.log(b);
