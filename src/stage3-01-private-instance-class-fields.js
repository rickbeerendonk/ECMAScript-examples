/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-class-fields

class Test {
  #privateValue;
  publicValue;

  constructor() {
    this.#privateValue = 2;
    this.publicValue = 2;
  }

  sum() {
    return this.#privateValue + this.publicValue;
  }
}

const test = new Test();

// Doesn't compile:
//console.log('Private value:', test.#privateValue);

console.log('Private value:', test.privateValue);
console.log('Public value:', test.publicValue);
console.log('Sum:', test.sum());
