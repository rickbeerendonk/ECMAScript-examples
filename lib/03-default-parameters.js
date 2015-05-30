"use strict";

function test(a) {
	var b = arguments[1] === undefined ? 10 : arguments[1];
	var c = arguments[2] === undefined ? "default" : arguments[2];
	var d = arguments[3] === undefined ? function () {
		return "Hello world!";
	} : arguments[3];

	console.log(a);
	console.log(b);
	console.log(c);
	console.log(d());
	console.log("");
}

console.log("test()");
test();

console.log("test(1)");
test(1);

console.log("test(1, 2)");
test(1, 2);

console.log("test(1, undefined, 'other')");
test(1, undefined, "other");

console.log("test(undefined, undefined, undefined, () => 'Hello TechDays!')");
test(undefined, undefined, undefined, function () {
	return "Hello TechDays!";
});