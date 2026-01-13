/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

// 1. Create object with null prototype
var obj1 = Object.create(null);
console.log(obj1.toString); // undefined (no inherited methods)

// 2. Create object with Object.prototype
var obj2 = Object.create(Object.prototype);
console.log(typeof obj2.toString); // "function" (inherited)

// 3. Create object with custom prototype
var proto = {
	greet: function() {
		return "Hello, " + this.name;
	}
};
var obj3 = Object.create(proto);
obj3.name = "Alexandra";
console.log(obj3.greet()); // "Hello, Alexandra"

// Check prototype chain
console.log(Object.getPrototypeOf(obj3) === proto); // true

// 4. Create with properties descriptor (2nd parameter)
var obj4 = Object.create(Object.prototype, {
	name: {
		value: "Alexandra",
		writable: true,
		enumerable: true,
		configurable: true
	}
});
console.log(obj4.name); // "Alexandra"
