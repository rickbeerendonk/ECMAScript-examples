/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

/* eslint no-unreachable: warn */

// See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#rethrowing_an_error_with_a_cause

try {
  throw new Error('Something went wrong');
} catch (err) {
  throw new Error('We found a problem', { cause: err });
}
