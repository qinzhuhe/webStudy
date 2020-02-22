"use strict";

{
  // 给函数传递参数
  var add = function add(x, y) {
    return x + y;
  };

  // 扩展运算符的使用 ...
  // 复制数组的操作
  var list = [1, 2, 3, 4, 5];
  var list2 = [].concat(list);
  console.log(list2); // 分割数组

  var totalList = [1, 'a', 'b', 'c'];
  var strList = totalList.slice(1);
  console.log(strList);
  var addList = [1, 2];
  console.log(add.apply(void 0, addList));
} // fill

{
  // fill (替换内容, 从第几个下标开始, 到第几个位数结束--注意，是数字的位数，例如第一位第二位第三位，而不是下标)
  var _list = [1, 2, 3, 4, 5];

  var _list2 = [].concat(_list).fill(5);

  console.log(_list2);
  var list3 = [].concat(_list).fill(3, 1, 4);
  console.log(list3);
} // find findIndex

{
  // find 会返回搜索到的第一个值，就不会继续查找（在搜查时，更推荐实用唯一的标识符进行搜查，例如：id）
  var _list3 = [{
    title: 'es6'
  }, {
    title: 'webpack',
    id: 2
  }, {
    title: 'vue'
  }, {
    title: 'webpack',
    id: 3
  }]; // find 会返回搜索到的第一个值，就不会继续查找（在搜查时，更推荐实用唯一的标识符进行搜查，例如：id）

  var result = _list3.find(function (item) {
    return item.title === 'webpack';
  }); // findIndex 会返回对应的下标值


  var resultIndex = _list3.findIndex(function (item) {
    return item.title === 'webpack';
  });

  console.log(result, resultIndex);
} // includes 和 indexOf

{
  var _list4 = [1, 2, 3, 4, 5, 6];

  var _result = _list4.includes(2);

  console.log('includes', _result);
} // flat 展开数组的操作

{
  var _ref;

  var _list5 = [1, 2, 3, ['2nd', 4, 5, 6, ['3rd', 7, 8, 9]]];

  var flatList = (_ref = []).concat.apply(_ref, _list5);

  console.log(flatList); // flat 中不传值则是会默认只展开第一层数组

  var flatList2 = _list5.flat(2);

  console.log('flat', flatList2);
}