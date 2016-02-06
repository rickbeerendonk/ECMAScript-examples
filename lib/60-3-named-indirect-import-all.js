'use strict';

var _namedIndirectExport = require('./60-2-named-indirect-export');

var math = _interopRequireWildcard(_namedIndirectExport);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(math.cube(3)); // 27