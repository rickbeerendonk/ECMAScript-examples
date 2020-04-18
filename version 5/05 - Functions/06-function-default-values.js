/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function test(a, b) {
  if (a === undefined) {
    a = 'no value';
  }

  if (b === undefined) {
    b = 0;
  }

  console.log(a);
  console.log(b);
}

test(true);

console.log('--');

test(undefined, 123);
