"use strict";

var result = (function () {
  var _result = [];
  var _arr = [1, 2, 3];

  for (var _i = 0; _i < _arr.length; _i++) {
    var i = _arr[_i];

    _result.push(i * i);
  }

  return _result;
})();

console.log(result[0]); // 1
console.log(result[1]); // 2
console.log(result[2]); // 3