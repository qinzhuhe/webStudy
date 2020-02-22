"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author: zy
 * @Date: 2020-01-20 16:17:29
 * @LastEditors  : zy
 * @LastEditTime : 2020-01-20 16:52:41
 * @Description: 
 */
{
  // ES5 的时候是通过构造函数来实现类的功能的
  var Person = function Person(name, age) {
    this.name = name;
    this.age = age;
  };

  Person.prototype.sayHello = function () {
    console.log("\u6211\u7684\u540D\u5B57\u53EB\u505A".concat(this.name, ", \u6211\u4ECA\u5E74").concat(this.age, "\u5C81\u4E86"));
  };

  var p = new Person('小明', 22);
  console.log(p);
} // ES6 实现类

{
  var _Person =
  /*#__PURE__*/
  function () {
    function _Person(name, age) {
      _classCallCheck(this, _Person);

      this.name = name;
      this.age = age;
    }

    _createClass(_Person, [{
      key: "sayHello",
      value: function sayHello() {
        console.log("\u540D\u5B57\u662F".concat(this.name, ", \u4ECA\u5E74").concat(this.age, "\u5C81\u4E86"));
      }
    }]);

    return _Person;
  }();

  var _p = new _Person('小明', 20);

  console.log('class', _p);
  console.log(_typeof(_Person)); // 类本质就是一个函数，ES6 中可以将类看做构造函数的语法糖
} // 类的继承

{
  var Parent = function Parent() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Nick';

    _classCallCheck(this, Parent);

    this.name = name;
  }; // extends 继承父类


  var Child =
  /*#__PURE__*/
  function (_Parent) {
    _inherits(Child, _Parent);

    function Child() {
      var _this;

      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Joy';

      _classCallCheck(this, Child);

      // 使用 spuer() 声明子类对父类属性进行覆写
      _this = _possibleConstructorReturn(this, _getPrototypeOf(Child).call(this, name));
      _this.name = name;
      return _this;
    }

    return Child;
  }(Parent);

  console.log('继承', new Child());
}
{
  var _Person2 =
  /*#__PURE__*/
  function () {
    function _Person2() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hand';

      _classCallCheck(this, _Person2);

      this.name = name;
    } // 有 get 和 set 两种方法
    // get 和 set 不是函数，而是其中的两个属性


    _createClass(_Person2, [{
      key: "fullName",
      get: function get() {
        return this.name + '\xa0' + 'Liu';
      },
      set: function set(value) {
        this.name = name;
      }
    }]);

    return _Person2;
  }();

  var _p2 = new _Person2();

  console.log('get', _p2.fullName);
  _p2.fullName = 'ros';
  console.log('set', _p2.fullName);
} // 静态方法 

{
  var _Person3 =
  /*#__PURE__*/
  function () {
    function _Person3() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hand';

      _classCallCheck(this, _Person3);

      this.name = name;
    }

    _createClass(_Person3, null, [{
      key: "sayHello",
      value: function sayHello(obj) {
        console.log('my name is ' + obj.name);
      }
    }]);

    return _Person3;
  }();

  var _p3 = new _Person3('小华');

  _Person3.sayHello(_p3);

  console.log(_p3);
} // 静态属性

{
  var _Person4 = // static prop = 'test' // es7 声明
  function _Person4() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hand';

    _classCallCheck(this, _Person4);

    this.name = name;
  };

  _Person4.prop = 'test'; // ES6 声明静态属性

  console.log(_Person4.prop);
}