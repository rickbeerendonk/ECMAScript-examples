/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-partial-application

function multiply(a, b) {
  return a * b;
}

const double = multiply(2, ?); // apply from the left
const triple = multiply(?, 3); // apply from the right

console.log('double(4):', double(4)); // 8
console.log('triple(4):', triple(4)); // 12
