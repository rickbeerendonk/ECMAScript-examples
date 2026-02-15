/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var arr = ['a', 'b', 'c', 'b', 'a'];
console.log(arr.lastIndexOf('b')); // 3 (last occurrence at index 3)
console.log(arr.lastIndexOf('a')); // 4 (last occurrence at index 4)
console.log(arr.lastIndexOf('e')); // -1 (not found)

// With fromIndex, search backwards from that index.
console.log(arr.lastIndexOf('b')); // 3
console.log(arr.lastIndexOf('b', 2)); // 1 (search before index 2)
