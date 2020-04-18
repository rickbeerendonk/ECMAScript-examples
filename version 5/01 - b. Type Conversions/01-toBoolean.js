/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

console.log('undefined:', Boolean(undefined)); // undefined: false
console.log('null:', Boolean(null)); // null: false

console.log('-1:', Boolean(-1)); // -1: true
console.log('0:', Boolean(0)); // 0: false
console.log('1:', Boolean(1)); // 1: true

console.log("'':", Boolean('')); // '': false
console.log("' ':", Boolean(' ')); // ' ': true
console.log("'0':", Boolean('0')); // '0': true
console.log("'1':", Boolean('1')); // '1': true
console.log("'false':", Boolean('false')); // 'false': true
console.log("'true':", Boolean('true')); // 'true': true
