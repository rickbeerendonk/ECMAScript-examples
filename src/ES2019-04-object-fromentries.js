/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

const obj1 = Object.fromEntries([['a', 1], ['b', 2]]);
console.log(obj1); // { a: 1, b: 2 }

const obj2 = { foo: true, bar: false };
console.log(Object.fromEntries(Object.entries(obj2))); // { foo: true, bar: false }
