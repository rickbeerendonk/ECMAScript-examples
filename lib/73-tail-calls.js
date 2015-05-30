"use strict";

function recursive(_x) {
	var _again = true;

	_function: while (_again) {
		var n = _x;
		_again = false;

		if (n < 1) {
			return "Done";
		}

		_x = n - 1;
		_again = true;
		continue _function;
	}
}

// No stack overflow
console.log(recursive(100000));