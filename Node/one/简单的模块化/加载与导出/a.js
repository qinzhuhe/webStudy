// require方法有两个作用：
// 		1、加载文件模块并执行里面的代码
// 		2、拿到被加载文件模块导出的接口对象

// 		在每个文件模块中都提供了一个对象：exports
// 		exports 默认是一个空对象
// 		而所需要做的就是把所有需要被外部访问的成员都加载在这个空对象中

var fs = require('fs');

var bExports = require('./b.js')

console.log(bExports.foo)
console.log(bExports.add(10, 20))

bExports.readFile('./a.js');

fs.readFile('./b.js', function (err, data){
	if(err){
		console.log(err)
	}else{
		console.log(data.toString());
	}
})