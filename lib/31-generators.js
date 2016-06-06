'use strict';

// Babel:
require('babel-polyfill');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var test = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
	var current;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					current = 1;

				case 1:
					if (!true) {
						_context.next = 6;
						break;
					}

					_context.next = 4;
					return current++;

				case 4:
					_context.next = 1;
					break;

				case 6:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
}));

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = test[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var n = _step.value;

		if (n > 10) {
			break;
		}
		console.log(n);
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