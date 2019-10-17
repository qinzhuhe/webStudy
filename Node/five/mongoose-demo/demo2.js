var mongoose = require('mongoose')
var Schema = mongoose.Schema

// 1. 连接数据库
// 指定连接的数据库不需要存在，当你插入第一条数据后就会自动被创建出来
mongoose.connect('mongodb://localhost/itcast')

// 2. 通过代码设计文档结构（表结构）
// 值
var userSchema = new Schema({
	username: {
		type: String,
		reuqired: true // 必须存在不能为空
	},
	password: {
		type: String,
		required: true
	},
	email: {
		type: String
	}
})

// 3.将文档结构发布为模型
// 		mongoose.model 方法就是用来将一个架构发布为 model
// 		第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
// 					mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
// 					例如这里的 User 最终会变为 users 集合名称
// 		第二个参数：架构 Schema
//
// 		返回值：模型构造函数
var User = mongoose.model('User', userSchema)

// 4. 当我们有了模型构造函数之后们就可以使用这个构造函数对 users 集合中的数据进行增删改查操作了


// 新增数据
// var admin = new User({
// 	username: '张三',
// 	password: '123456',
// 	email: '你猜@admin.com'
// })

// admin.save(function (err, ret) {
// 	if (err) {
// 		console.log('保存失败')
// 	} else {
// 		console.log('保存成功')
// 		console.log(ret)
// 	}
// })


// 查询数据
// 查询全部
// User.find(function (err, ret) {
// 	if (err) {
// 		console.log('查询失败')
// 	} else {
// 		console.log(ret)
// 	}
// })

// 按照条件查询
// User.find({
// 	username: '张三'
// }, function (err, ret) {
// 	if (err) {
// 		console.log('查询失败')
// 	} else {
// 		console.log(ret)
// 	}
// })

// 只找匹配的第一条数据
// User.findOne({
// 	username: '张三',
// 	password: 123456
// }, function (err, ret) {
// 	if (err) {
// 		console.log('查询失败')
// 	} else {
// 		console.log(ret)
// 	}
// })

// 删除数据
// User.remove({
// 	username: '张三'
// }, function (err, ret) {
// 	if (err) {
// 		console.log('删除失败')
// 	} else {
// 		console.log('删除成功')
// 		console.log(ret)
// 	}
// })


// 更新数据
User.findByIdAndUpdate('5da6e8bae5d7a20eacf04d63', {
	password: '123'
}, function (err, ret) {
	if (err) {
		console.log('更新失败')
	} else {
		console.log('更新成功')
	}
})