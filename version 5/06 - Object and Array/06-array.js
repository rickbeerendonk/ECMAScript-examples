/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

var a = new Array();

a[0] = true;
a[1] = 2;
a.push('three');

console.log(JSON.stringify(a)); // [true,2,"three"]
console.log(a.length); // 3

delete a[1];

console.log(JSON.stringify(a)); // [true,null,"three"]
console.log(a.length); // 3
