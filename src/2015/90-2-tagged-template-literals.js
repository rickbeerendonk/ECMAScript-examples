/*! European Union Public License version 1.2 !*/
/*! Copyright © 2020 Rick Beerendonk          !*/

function test(stringArr, ...expressions) {
  console.log(stringArr); // [ 'Boolean ', ' Number ', ' String ', '' ]
  console.log(...expressions); // false 123 text
  return 'Number of expression = ' + expressions.length;
}

console.log(test`Boolean ${false} Number ${123} String ${'text'}`);
// Number of expression = 3
