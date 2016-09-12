'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Base = function () {
	function Base(name) {
		_classCallCheck(this, Base);

		this.name = name;
	}

	_createClass(Base, [{
		key: 'toString',
		value: function toString() {
			return this.name;
		}
	}]);

	return Base;
}();

var Account = function (_Base) {
	_inherits(Account, _Base);

	function Account(name) {
		_classCallCheck(this, Account);

		var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, name));

		_this.balance = 0;
		return _this;
	}

	_createClass(Account, [{
		key: 'deposit',
		value: function deposit(amount) {
			this.balance += amount;
		}
	}, {
		key: 'withdraw',
		value: function withdraw(amount) {
			this.balance -= amount;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return _get(Account.prototype.__proto__ || Object.getPrototypeOf(Account.prototype), 'toString', this).call(this) + ': ' + this.balance;
		}
	}]);

	return Account;
}(Base);

;

var acc = new Account('Rick');
acc.deposit(100);
acc.withdraw(25);

console.log(acc); // { name: 'Rick', balance: 75 }