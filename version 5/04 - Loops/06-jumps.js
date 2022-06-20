/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

for (var i = 1; i < 20; i++) {
  if (i % 10 === 0) break;

  if (i % 3 === 0) continue;

  console.log('Iteration: ' + i);
}

console.log('Done');

// Iteration: 1
// Iteration: 2
// Iteration: 4
// Iteration: 5
// Iteration: 7
// Iteration: 8
// Done
