/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-nullish-coalescing

console.log('undefined:', undefined ?? 'other');
console.log('null:', null ?? 'other');
console.log('"":', '' ?? 'other');
console.log('0:', 0 ?? 'other');
console.log('false:', false ?? 'other');
