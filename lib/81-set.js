'use strict';

// Babel:
require('babel/polyfill');

function logIterator(iterator) {
	var s = '';
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var v = _step.value;

			s += v + '; ';
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	console.log(s);
}

var s = new Set(['A', 'B']);
s.add('C');
s.add('D');

logIterator(s.keys()); // A; B; C; D
logIterator(s.values()); // A; B; C; D
logIterator(s.entries()); // A,A; B,B; C,C; D,D

console.log('');
console.log(s.has('A')); // true
console.log(s.size); // 4

s.delete('A');
console.log(s.has('A')); // false
console.log(s.size); // 3

s.clear();
console.log(s.size); // 0