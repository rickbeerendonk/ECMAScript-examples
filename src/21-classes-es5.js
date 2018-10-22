'use strict';

var Base = function(name) {
	this.name = name;
	return this;
};

Base.prototype = {
	constructor: Base,
	toString: function() {
		return this.name;
	}
};

var Account = function(name) {
	Base.call(this, name);
	this.balance = 0;
	return this;
};

Account.prototype = new Base();

Account.prototype.deposit = function(amount) {
	this.balance += amount;
};
	
Account.prototype.withdraw = function(amount) {
	this.balance -= amount;
};
	
Account.prototype.toString = function() {
	return this + ': ' + this.balance;
};

var acc = new Account('Rick');
acc.deposit(100);
acc.withdraw(25);

console.log(acc);  // { name: 'Rick', balance: 75 }