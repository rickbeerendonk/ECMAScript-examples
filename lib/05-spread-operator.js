"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function sum(a, b, c) {
	return a + b + c;
}

console.log(sum.apply(undefined, [3, 4, 5])); // 12

console.log([].concat(_toConsumableArray("abcde"))[2]); // c