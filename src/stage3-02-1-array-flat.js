const arr = [1, [2, [3], 4], 5, [], 6];

console.log( arr.flat()  );  // [1, 2, Array(1), 4, 5, 6]
console.log( arr.flat(1) );  // [1, 2, Array(1), 4, 5, 6]
console.log( arr.flat(2) );  // [1, 2, 3, 4, 5, 6]
