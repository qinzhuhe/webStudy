# 初始 mongoose 

- 官网：http://mongoosejs.com
- 官方指南：http://mongoosejs.com/docs/guide.html
- 官方 API 文档：http://mongoosejs.com/docs/api.html



### MongoDB 数据库基本概念

- 可以有多个数据库
- 一个数据库中可以有多个集合
- 一个集合中可以有多个文档（表记录）
- 文档结构很灵活，没有任何限制
- MongoDB 非常灵活，不需要像 mysql 先创建数据库、表、设计表结构
  - 在这里只需要：当你需要插入数据的时候，只需要指定往哪个数据库的哪个集合操作就可以了。
  - 一切都由它自身本身来帮助你完成建库建表这件事

```shell
{
	// 集合
	qq: {
		users: [
			{name: '张三', age: 15},
			{name: '李四', age: 15},
			{name: '王五', age: 18}
			....
		],
		products: [
			...
		]
	},
	taobao: {
		...
	},
	baidu: {
		...
	}
}
```



## 起步使用

### 安装

```shell
npm i mongoose
```



### 设计 Scheme 发布 Model

```javascript
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
```

