/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

var a = [true, 2, 'three'];

a.push(444);

console.log(JSON.stringify(a)); // [true,2,"three",444]
console.log(a.length); // 4
