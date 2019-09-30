// 默认得到的是对象
// 使用对象中的成员必须 . 点某个成员来访问
// 有时候，对于一个模块，我仅仅只希望导出其中一个功能

var fooExports = require('./foo.js')
// console.log(foo)

console.log(fooExports)