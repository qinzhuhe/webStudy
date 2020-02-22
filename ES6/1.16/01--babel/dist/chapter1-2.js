"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// 数组解构
{
  var a, b;
  a = 1;
  b = 2;
  console.log(a, b);
} // 默认值

{
  var _a, _b, c;

  _a = 1;
  _b = 2;
  var _ = 3;
  c = _ === void 0 ? 6 : _;
  console.log(_a, _b, c);
} // 拓展运算符

{
  var _a2, other;

  _a2 = 1;
  other = [2, 3];
  console.log(_a2, other);
} // 占位符

{
  var _a3, _b2;

  var _ref = [1, 2, 3];
  _a3 = _ref[0];
  _b2 = _ref[2];
  console.log(_a3, _b2);
} // 对象解构

{
  var _a4, _b3;

  var _a$b = {
    a: 2,
    b: 3
  };
  _a4 = _a$b.a;
  _b3 = _a$b.b;
  console.log(_a4, _b3);
} // 自定义变量获取值

{
  var _a5, _b4;

  var _a$b2 = {
    a: 2,
    b: 3
  };
  num = _a$b2.a;
  total = _a$b2.b;
  console.log(num, total);
} // 案例场景

{
  var fn = function fn() {
    return {
      name: 'Nick',
      nameList: [{
        name: 'KK'
      }]
    };
  };

  var _b5 = fn();

  var person = _b5.name,
      _b5$nameList = _slicedToArray(_b5.nameList, 1),
      otherPerson = _b5$nameList[0].name;

  console.log(person, otherPerson);
}