/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2018 Rick Beerendonk   !*/

// https://github.com/tc39/proposal-pipeline-operator/

'use strict';

const unreadable = 1000000.000001;
const readable = 1_000_000.000_001;

console.log(unreadable === readable);
// true
