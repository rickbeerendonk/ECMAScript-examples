/*! European Union Public License version 1.2 !*/
/*! Copyright © 2022 Rick Beerendonk          !*/

// https://github.com/tc39/proposal-record-tuple

// Polyfill
import {
  Records,
  Tuple
} from '../../node_modules/@bloomberg/record-tuple-polyfill';

// Tuple: Deeply immutable Array-like structure

let tuple1 = #[1, 2, #[3, 4]];
let tuple2 = #[1, 2, #[3, 4]];

console.log('tuple1 === tuple2: ', tuple1 === tuple2);

let tuple3 = #[...tuple1, 5];
let tuple4 = #[1, 2, #[3, 4], 5];

console.log('tuple3 === tuple4: ', tuple3 === tuple4);

// Record: Deeply immutable Object-like structure

let record1 = #{ a: 1, b: 2, c: #{ d: 3 } };
let record2 = #{ a: 1, b: 2, c: #{ d: 3 } };

console.log('record1 === record2: ', record1 === record2);

let record3 = #{ ...record1, e: 4 };
let record4 = #{ a: 1, b: 2, c: #{ d: 3 }, e: 4 };

console.log('record3 === record4: ', record3 === record4);
