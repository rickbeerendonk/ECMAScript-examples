/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

function test() {
  // var arguments = [true, 2, "three"]; // But not a real array!

  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
  // true
  // 2
  // three
}

test(true, 2, 'three');
