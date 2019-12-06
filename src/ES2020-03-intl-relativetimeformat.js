/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-intl-relative-time

'use strict';

/*
  new Intl.RelativeTimeFormat(
    "en", {
      localeMatcher: "best fit", // "lookup"
      numeric: "always", // "auto" (not always uses numeric values in the output)
      style: "long", // "short" or "narrow" (some locales: short == narrow)
  });

  Units: "year", "quarter", "month", "week", "day", "hour", "minute", "second"
*/

let rtf;

console.log();
console.log('EN: Numeric "always", Style "long"');
rtf = new Intl.RelativeTimeFormat('en', { numeric: 'always', style: 'long' });
console.log(rtf.format(-1, 'day')); // 1 day ago
console.log(rtf.format(0, 'day')); // in 0 days
console.log(rtf.format(1, 'day')); // in 1 day

console.log();
console.log('EN: Numeric "auto", Style "long"');
rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto', style: 'long' });
console.log(rtf.format(-1, 'day')); // yesterday
console.log(rtf.format(0, 'day')); // today
console.log(rtf.format(1, 'day')); // tomorrow
console.log(rtf.format(-1, 'month')); // last month
console.log(rtf.format(1, 'year')); // next year

console.log();
console.log('EN: Numeric "auto", Style "short"');
rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto', style: 'short' });
console.log(rtf.format(-1, 'month')); // last mo.
console.log(rtf.format(1, 'year')); // next yr.

console.log();
console.log('NL: Numeric "auto", Style "short"');
rtf = new Intl.RelativeTimeFormat('nl', { numeric: 'always', style: 'short' });
console.log(rtf.format(-1, 'day')); // 1 dag geleden
console.log(rtf.format(0, 'day')); // over 0 dgn
console.log(rtf.format(1, 'day')); // over 1 dag
