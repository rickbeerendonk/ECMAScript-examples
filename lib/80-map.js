"use strict";

// Babel:
require("babel/polyfill");

function logIterator(iterator) {
	var s = "";
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var v = _step.value;

			s += v + "; ";
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator["return"]) {
				_iterator["return"]();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	console.log(s);
}

var map = new Map([["A", 111], ["B", 222]]);
map.set("C", 333);

logIterator(map.keys()); // A; B; C
logIterator(map.values()); // 111; 222; 333
logIterator(map.entries()); // A,111; B,222; C,333

console.log("");
console.log(map.get("A")); // 1
console.log(map.size); // 3

map["delete"]("A");
console.log(map.get("A")); // undefined
console.log(map.size); // 2

map.clear();
console.log(map.size); // 0