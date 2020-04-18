/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function foo(a, b, c) {
  console.log(JSON.stringify(this));
  console.log(a);
  console.log(b);
  console.log(c);
}

foo.call({ name: 'this' }, 1, 2);
// {"name":"this"}
// 1
// 2
// undefined
