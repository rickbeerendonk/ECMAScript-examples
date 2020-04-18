/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

console.log('undefined:', Number(undefined)); // undefined: NaN
console.log('null:', Number(null)); // null: 0

console.log('false:', Number(false)); // false: 0
console.log('true:', Number(true)); // true: 1

console.log("'':", Number('')); // '': 0
console.log("'0':", Number('0')); // '0': 0
console.log("'1':", Number('1')); // '1': 1
console.log("'2.34':", Number('2.34')); // '2.34': 2.34
console.log("'false':", Number('false')); // 'false': NaN
console.log("'true':", Number('true')); // 'true': NaN
console.log("'Infinity':", Number('Infinity')); // 'Infinity': Infinity
console.log("'infinity':", Number('infinity')); // 'infinity': NaN
