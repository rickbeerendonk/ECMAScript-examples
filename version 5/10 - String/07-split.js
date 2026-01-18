/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var str1 = 'Alexandra,Benjamin,Charlotte';
var array1 = str1.split(',');
console.log(JSON.stringify(array1)); // ["Alexandra","Benjamin","Charlotte"]

var str2 = 'a-b-c-d';
var array2 = str2.split('-');
console.log(JSON.stringify(array2)); // ["a","b","c","d"]

var str3 = 'Hello';
var array3 = str3.split('');
console.log(JSON.stringify(array3)); // ["H","e","l","l","o"]

var str4 = 'one two three four';
var array4 = str4.split(' ');
console.log(JSON.stringify(array4)); // ["one","two","three","four"]

var str5 = 'one two three four';
var array5 = str5.split(' ', 2);
console.log(JSON.stringify(array5)); // ["one","two"]
