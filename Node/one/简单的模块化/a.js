// require 是一个方法
// 它的作用就是用来加载模块的
// 在 Node 中，模块有三种：
// 		具名的核心模块，例如 fs、http
// 		用户自己编写的文件模块
// 			相对路径必须加 ./
// 			Node 中可以省略后缀名

// 		在Node中，没有全局作用域，只有模块作用域
// 			外部访问不到内部
// 			而内部也访问不到外部
// 			默认都是封闭的

// 		既然是模块作用域，那如何让模块与模块之间进行通信
// 		有时，我们加载文件模块的目的不是为了简简单单的执行里面的代码，更重要是为了里面的成员

var foo = 'aaa'

console.log('a start')

function add (x, y){
	return x + y
}

// require('./b.js')

require('./b')// Node 会自动的寻找js后缀文件

console.log('a end')

console.log('foo的值是', foo)