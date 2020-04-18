/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

var country = 'The Netherlands';

switch (country) {
  case 'The Netherlands':
  case 'Belgium':
  case 'Luxembourg':
    console.log(country + ' is in the Benelux');
    break;

  case 'Norway':
  case 'Sweden':
  case 'Denmark':
    console.log(country + ' is in Scandinavia');
    break;

  default:
    console.log(country + " isn't in the Benelux or in Scandinavia");
    break;
}
