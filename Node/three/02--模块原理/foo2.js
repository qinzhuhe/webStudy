exports.foo = 'bar' // foo : bar

module.exports.a = 123 // foo : bar, a : 123

// 与 module.exports 断开了连接，因此内容忽略
exports = {
	a : 456
}

// foo 经过修改
module.exports.foo = 'haha' // foo : haha, a : 123

// 因为 exports 已经断开了连接，所以内容忽略
exports.c = 456

// exports 与 module.exports 重新建立引用关系
exports = module.exports

// 因为上面重新建立了引用关系，因此内容有效记录
exports.a = 789 // foo : haha, a : 789

// 将上面的内容全部忽略
// 最终只能得到 function
module.exports = function () {
	console.log('hello')
}