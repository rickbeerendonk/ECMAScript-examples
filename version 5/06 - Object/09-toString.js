/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var obj = { name: "John" };
console.log(obj.toString()); // "[object Object]"

// Arrays
var arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"

// Functions
function greet() {}
console.log(greet.toString()); // "function greet() {}"

// Numbers
var num = 123;
console.log(num.toString()); // "123"

// Strings
var str = "hello";
console.log(str.toString()); // "hello"

// Booleans
console.log(true.toString()); // "true"
console.log(false.toString()); // "false"

// Custom toString
var custom = {
	name: "Custom",
	toString: function() {
		return "Custom Object: " + this.name;
	}
};
console.log(custom.toString()); // "Custom Object: Custom"
