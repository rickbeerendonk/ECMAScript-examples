'use strict';

class Stack extends Array {
	constructor() {
		super();
	}
	
    top() { 
		return this[this.length - 1]; 
	}
}

let s = new Stack();
s.push('World');
s.push('Hello');
console.log(s.top());  // Hello
console.log(s.length); // 2