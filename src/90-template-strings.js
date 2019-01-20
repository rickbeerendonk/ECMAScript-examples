/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

const name = 'EcmaScript';
const version = 2015;

const x = () => 'hi!';

const result = `This is about:
${name} ${version + 1} ${x()}`;

console.log(result);
// This is about:
// EcmaScript 2016 hi!