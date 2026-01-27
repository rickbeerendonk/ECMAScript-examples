/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// Sort an array in place and return it. The default sort order is according to string Unicode code points.
var a = ['cherry', 'apple', 'banana'];
a.sort();
console.log(JSON.stringify(a)); // ["apple","banana","cherry"]

// Sort an array in place and return it. The default sort order is according to string Unicode code points.
// Note that the elements are sorted as strings. This can lead to unexpected results when sorting numbers.
var b = [10, 5, 40, 25, 1000, 1];
b.sort();
console.log(JSON.stringify(b)); // [1,10,1000,25,40,5]

// Use compare function.
// - If the compare function returns a value less than 0, sort a before b.
// - If it returns a value greater than 0, sort b before a.
// - If it returns 0, leave a and b unchanged with respect to each other.
var c = [10, 5, 40, 25, 1000, 1];
c.sort(function (a, b) {
  return a - b;
});
console.log(JSON.stringify(c)); // [1,5,10,25,40,1000]

// Use compare function to sort in descending order.
var d = [10, 5, 40, 25, 1000, 1];
d.sort(function (a, b) {
  return b - a;
});
console.log(JSON.stringify(d)); // [1000,40,25,10,5,1]
