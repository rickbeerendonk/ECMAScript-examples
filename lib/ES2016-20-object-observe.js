"use strict";

var obj = {
	year: 2016,
	name: "ES2016"
};

Object.observe(obj, function (changes) {
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = changes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var change = _step.value;

			console.log(JSON.stringify(change));
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
});

obj.year = 2015;
// {"type":"update","object":{"year":2015,"name":"ES2016"},"name":"year","oldValue":2016}

obj.name = "ES2015";
// {"type":"update","object":{"year":2015,"name":"ES2015"},"name":"name","oldValue":"ES2016"}

delete obj.year;
// {"type":"delete","object":{"name":"ES2015"},"name":"year","oldValue":2015}

Object.defineProperty(obj, name, { writable: false });
// {"type":"add","object":{"name":"ES2015"},"name":""}

Object.setPrototypeOf(obj, {});
// {"type":"setPrototype","object":{"name":"ES2015"},"name":"__proto__","oldValue":{}}

Object.seal(obj);
// {"type":"reconfigure","object":{"name":"ES2015"},"name":"name"}
// {"type":"preventExtensions","object":{"name":"ES2015"}}