"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 对象中扩展运算符的使用
{
  // 复制对象
  var obj = {
    name: 'Nick',
    video: 'es6'
  };

  var videoObj = _objectSpread({}, obj);

  console.log(videoObj); // 设置对象默认值

  var obj2 = _objectSpread({}, obj, {
    name: 'Jack'
  });

  console.log(obj2); // 合并对象

  var initObj = {
    color: 'red'
  };

  var obj3 = _objectSpread({}, obj, {}, initObj);

  console.log(obj3); // 坑点
  // 简单类型的时候，使用扩展运算符是没有问题的，但是如果扩展运算符展开对象以后，还是一个对象的话，我们复制的只是一个指针而已
} // es6 对象缩略

{
  var name = '小明';
  var age = 18;
  var es5Obj = {
    name: name,
    age: age,
    sayHello: function sayHello() {
      console.log('this is ES5Obj');
    }
  };
  var es6Obj = {
    name: name,
    age: age,
    sayHello: function sayHello() {
      console.log('this is ES6Obj');
    }
  };
  console.log('es5', es5Obj);
  console.log('es6', es6Obj);
  es5Obj.sayHello();
  es6Obj.sayHello();
} // ES6 可计算的属性名

{
  var key = 'name';
  var _es5Obj = {};
  _es5Obj[key] = '小明';

  var _es6Obj = _defineProperty({}, key, '小红');

  console.log(_es5Obj, _es6Obj);
} // 新增方法

{
  // Object.is() 和 '==='
  // 判断值是否相等，同类型同值相等就返回 true ，否则 false
  var result = Object.is(NaN, NaN);
  console.log(result, NaN === NaN); // Object.assign()
  // 赋值对象，第一个参数为目标对象，即为传值对象，第二个参数为来源对象，如果这个值只是一个对象的话，它只是复制值的指针，为浅拷贝

  var person = {
    name: '小米',
    age: 17,
    info: {
      height: 180
    }
  };
  var person2 = {};
  Object.assign(person2, person);
  person.info.height = 160;
  console.log(person2);
} // Array.from

{
  // Array.from 转换类数组对象
  // 它可以将一个类数组对象转化成一个数组
  // 如何判断一个类数组对象，有length，且能进行遍历
  var str = 'hello';
  var strList = Array.from(str);
  console.log(strList);
} // 对象提供的新方法

{
  // Object.keys() 
  // 遍历对象 所有的属性名
  var json = {
    name: 'Nick',
    video: 'es6',
    date: 2019
  };
  var _obj = {};

  for (var _i = 0, _Object$keys = Object.keys(json); _i < _Object$keys.length; _i++) {
    var _key = _Object$keys[_i];
    _obj[_key] = json[_key];
  }

  console.log(_obj); // Object.values()
  // 遍历对象 所有的属性值
  // Object.entries()
  // 遍历对象 所有的键值对
}