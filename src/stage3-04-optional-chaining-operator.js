/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-optional-chaining

const user = {
  address: null
};

console.log('user:', JSON.stringify(user));
console.log('user.address:', JSON.stringify(user.address));

// Would throw without ?.
console.log('user.address.street:', JSON.stringify(user.address?.street));
