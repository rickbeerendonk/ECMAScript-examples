/*! European Union Public License version 1.2 !*/
/*! Copyright © 2026 Rick Beerendonk          !*/

var obj = {
	name: "John",
	age: 30
};

// Check own properties
console.log(obj.hasOwnProperty("name")); // true
console.log(obj.hasOwnProperty("age")); // true
console.log(obj.hasOwnProperty("toString")); // false (inherited)

// Non-existent property
console.log(obj.hasOwnProperty("email")); // false

// Constructor property
function Person(name) {
	this.name = name;
}
var person = new Person("Jane");
console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("constructor")); // false (inherited)
