"use strict";

// ES5
{
  var str1 = 'a';
  var str2 = "\u20BB7";
  console.log(str1);
} // ES6

{
  var str3 = "\uD842\uDFB7";
  console.log('str3', str3);
} // for of

{
  var _str = "\uD842\uDFB7";

  for (var i = 0; i < _str.length; i++) {
    console.log('for', _str[i]);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = _str[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var word = _step.value;
      console.log('for-of', word);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
} // 判断字符串中是否包含指定字符串的几个方法

{
  var str = '123Nick321';
  console.log('include', str.includes('N', 0));
  console.log('starsWith', str.startsWith('Nick', 3));
  console.log('endsWidth', str.endsWith('k', 7));
} // 重复字符串

{
  var _str2 = 'Nick123';
  _str2 = _str2.repeat(3);
  console.log('repeat', _str2);
} // 头部补全

{
  var _str3 = 'Apple';
  _str3 = _str3.padStart(8, 'asdsd');
  console.log('padstart', _str3);
} // 尾部补全

{
  var _str4 = 'Apple';
  _str4 = _str4.padEnd(8, 'aabbv');
  console.log('padEnd', _str4);
} // 模板字符串

{
  // 老版
  // const name = 'nick'
  // const age = 18
  // const str = '我叫' + name + ', 我今年' + age
  // console.log(str)
  // 模板字符串
  var name = 'nick';
  var age = 18;

  var _str5 = "\u6211\u53EB".concat(name, ", \u6211\u4ECA\u5E74").concat(age);

  console.log('es6-str', _str5);
}