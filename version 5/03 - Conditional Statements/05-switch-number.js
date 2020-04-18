/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

var date = new Date();
var month = date.getMonth();

switch (month) {
  case 11:
  case 0:
  case 1:
    console.log('Winter');
    break;

  case 2:
  case 3:
  case 4:
    console.log('Spring');
    break;

  case 5:
  case 6:
  case 7:
    console.log('Summer');
    break;

  default:
    console.log('Autumn');
    break;
}
