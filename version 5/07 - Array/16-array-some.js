/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var numbers = [1, 2, 3, 4, 5];

console.log(
  'Has even numbers:',
  numbers.some(function (element) {
    return element % 2 === 0;
  })
); // true

var words = ['cat', 'dog', 'elephant'];

console.log(
  'Has long word (>5 chars):',
  words.some(function (word) {
    return word.length > 5;
  })
); // true
