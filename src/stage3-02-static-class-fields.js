/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-static-class-features/

class Test {
  static classValue;
}

Test.classValue = 123;

console.log('Class field value:', Test.classValue);
