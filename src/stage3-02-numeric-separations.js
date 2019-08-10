/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-numeric-separator

'use strict';

const unreadable = 1000000.000001;
const readable = 1_000_000.000_001;

console.log(unreadable === readable);
// true
