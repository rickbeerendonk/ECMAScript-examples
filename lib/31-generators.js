"use strict";

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }

// Babel:
require("babel/polyfill");

var test = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function callee$0$0() {
	var current;
	return regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
		while (1) switch (context$1$0.prev = context$1$0.next) {
			case 0:
				current = 1;

			case 1:
				if (!true) {
					context$1$0.next = 6;
					break;
				}

				context$1$0.next = 4;
				return current++;

			case 4:
				context$1$0.next = 1;
				break;

			case 6:
			case "end":
				return context$1$0.stop();
		}
	}, callee$0$0, this);
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
		if (!_iteratorNormalCompletion && _iterator["return"]) {
			_iterator["return"]();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}