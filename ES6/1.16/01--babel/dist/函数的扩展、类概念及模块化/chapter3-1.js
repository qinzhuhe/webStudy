"use strict";

/*
 * @Author: zy
 * @Date: 2020-01-20 15:10:35
 * @LastEditors  : zy
 * @LastEditTime : 2020-01-20 15:23:11
 * @Description: 
 */
{
  // es5 设置函数默认参数
  var es5Print = function es5Print(x, y) {
    y = y || 'world';
    console.log('es5', x + y);
  };

  // es6 设置函数默认参数
  var es6Print = function es6Print(x) {
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'world';
    console.log('es6', x + y);
  };

  es5Print('hello ', '');
  es6Print('hello', '');
} // rest

{
  var add = function add() {
    var sum = 0;

    for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
      rest[_key] = arguments[_key];
    }

    for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
      var value = _rest[_i];
      sum += value;
    }

    console.log(sum);
  };

  add(1, 2, 3, 4, 5);
}
{
  // 尾调用
  // 在函数的后面，返回的是另外一个函数，这种情况被称为 尾调用
  // 尾调用能够极大程度的节约性能
  var step2 = function step2(x) {
    console.log('尾调用', x);
  };

  var step1 = function step1(x) {
    return step2(x);
  };
}