/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

var a = [true, 2, 'three'];

var newArray = a.concat([false, 444]);

console.log(JSON.stringify(newArray)); // [true,2,"three",false,444]
console.log(newArray.length); // 5
