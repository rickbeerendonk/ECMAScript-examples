/*! European Union Public License version 1.2 !*/
/*! Copyright © 2015 Rick Beerendonk          !*/

'use strict';

function test(a, b = 10, c = 'default', d = () => 'Hello world!') {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d());
  console.log('');
}

console.log('test()');
test();

console.log('test(1)');
test(1);

console.log('test(1, 2)');
test(1, 2);

console.log('test(1, undefined, "other")');
test(1, undefined, 'other');

console.log('test(undefined, undefined, undefined, () => "Hello EcmaScript!")');
test(undefined, undefined, undefined, () => 'Hello EcmaScript!');
