// 在 Node 中，每个模块内部都有一个自己的 module 对象
// 该 module 对象中，有一个成员叫：exports 也是一个对象
// 也就是说如果你需要对外导出成员，只需要把导出的对象挂载到 module.exports 中

// 我们发现，每次导出接口成员的时候都通过这种方式略显复杂。
// 故此，Node 为了简化你的操作，专门提供了一个变量：exports 等于 module.exports

// var module = {
// 	exports : {

// 	}
// }

// exports.foo = 'bar'

// module.exports.add = function (x, y) {
// 	return x + y
// }

// 也就是说在模块中还有这么一句代码
// var exports = module.exports
// 两者一致，便说明我可以使用任意一方来导出接口成员

// console.log(exports === module.exports) // true

// 而谁来 require 我，谁就得到 module.exports
// 默认在代码的最后还有一句
// return module.exports

// 当一个模块需要导出单个成员时候
// 直接给 exports 赋值是不管用的

// 这里已经导致了链接的断开，所以失去了功能
// exports = {}

// exports.foo = 'bar'

// 这里导致 exports !== module.exports
// module.exports = {
// 	foo : 'bar'
// }

// 但是此处又重新建立两者的引用关系
// exports = module.exports

// exports.foo = 'hello'


