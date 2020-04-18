/*! European Union Public License version 1.2 !*/
/*! Copyright © 2018 Rick Beerendonk          !*/

var town = {
  name: 'Hillegom',
  age: 1000,
  country: 'The Netherlands'
};

for (var prop in town) {
  console.log(prop + ': ' + town[prop]);
}
