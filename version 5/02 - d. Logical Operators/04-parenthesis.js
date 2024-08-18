/*! European Union Public License version 1.2 !*/
/*! Copyright © 2023 Rick Beerendonk          !*/

var a = false;
var b = true;
var c = true;

if ((a && b) || c) {
  // Executed
  console.log('First');
}

if (a && (b || c)) {
  // NOT executed
  console.log('Second');
}

// First
