'use strict';

var name = 'EcmaScript';
var version = 2015;

var x = () => 'hi!';

var result = `This is about:
${name} ${version + 1} ${x()}`;

console.log(result);