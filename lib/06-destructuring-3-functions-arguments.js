'use strict';

// Nested: Object in array

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function test(_ref) {
	var _ref2 = _slicedToArray(_ref, 3);

	var value = _ref2[0];
	var _ref2$ = _ref2[1];
	var name = _ref2$.name;
	var version = _ref2$.version;
	var year = _ref2[2];

	console.log(value); // 1
	console.log(name); // EcmaScript
	console.log(version); // 6
	console.log(year); // 2016
}

var obj = {
	name: 'EcmaScript',
	year: 2015,
	version: 6
};

var data = [1, obj, 2016];

test(data);