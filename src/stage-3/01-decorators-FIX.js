/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-decorators

'use strict';

/* eslint no-unused-vars: 0 */

@annotation
class MyClass {}

function annotation(target) {
  target.annotated = true;
}

console.log(MyClass.annotated);
