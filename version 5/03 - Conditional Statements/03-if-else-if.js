/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

var date = new Date();
var time = date.getHours();

if (time < 6) {
  console.log('Good night');
} else if (time < 12) {
  console.log('Good morning');
} else if (time < 18) {
  console.log('Good afternoon');
} else {
  console.log('Good evening');
}
