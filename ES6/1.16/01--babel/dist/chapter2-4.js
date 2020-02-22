"use strict";

// map set Object Array 之间的区别
{
  var array = [];
  var obj = {};
  var set = new Set();
  var map = new Map();
  var goodItem = {
    fruit: 'apple'
  }; // 增加

  array.push(goodItem);
  obj['fruit'] = 'apple';
  map.set('fruit', 'apple');
  set.add(goodItem);
  console.log('add', array, obj, map, set); // 查询

  var resultArray = array.includes(goodItem);
  var resultObj = 'fruit' in obj;
  var resultMap = map.has('fruit');
  var resultSet = set.has(goodItem);
  console.log('search', resultArray, resultMap, resultObj, resultSet); // 修改

  array.forEach(function (item) {
    item.fruit = item.fruit ? 'orange' : '';
  });
  obj['fruit'] = 'orange';
  map.set('fruit', 'orange');
  set.forEach(function (item) {
    item.fruit = item.fruit ? 'orange' : '';
  });
  console.log('update', array, obj, map, set); // 删除

  var index = array.findIndex(function (item) {
    return item.fruit;
  });
  array.splice(index, 1);
  delete obj.fruit;
  map["delete"]('fruit');
  set["delete"]('fruit');
  console.log('delete', array, obj, map, set);
} // 类型转换

{
  // map 和 Object 之间的转换
  var _obj = {
    name: 'Nick',
    hobbies: 'swimming'
  };
  console.log(Object.entries(_obj)); // 可以将 对象 转换为 map

  var _map = new Map(Object.entries(_obj));

  console.log('map', _map); // 逆运算转换

  var obj2 = Object.fromEntries(_map); // 可以将 map 转换为 对象

  console.log('obj', obj2);
}
{
  // 数组 和 set
  var _array = [1, 2, 3, 4, 5];

  var _set = new Set(_array); // 将 数组 转化成 set


  console.log('set', _set);
  var array2 = Array.from('hello'); // 这个方法可以将一切传入的数据都转化成数组

  console.log('array', array2);
}