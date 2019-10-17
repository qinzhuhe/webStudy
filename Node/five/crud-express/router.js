var fs = require('fs')
var Student = require('./students')

var express = require('express')

// 1. 创建了一个路由容器
var router = express.Router()

// 2. 强路由都挂载到 router 路由容器中

// 处理请求首页渲染
router.get('/students', function (req, res) {
	// readFile 第二个参数是可以选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf 编码转成我们能认知的字符
	// 除了这样来转换之外，也可以通过 data.toString() 方式达成同样的效果

	Student.find(function (err, students) {
		if (err) {
			return res.status(500).send('Server error')
		}
		res.render('index.html', {
			fruits : [
				'苹果',
				'香蕉',
				'菠萝'
			],
			students : students
		})
  	})
})

// 跳转新增学生页面
router.get('/students/new', function (req, res) {
	res.render('new.html')
})

// 处理新增学生请求
router.post('/students/new', function (req, res) {
	// 1. 获取表单数据
	// 2. 处理
	// 		将数据保存并持久化
	// 3. 发送响应
	// 先读取出来，转成对象
	// 然后往对象中 push 数据
	// 然后把对象转为 字符串
	// 然后把字符串再次写入文件
	new Student(req.body).save(function (err) {
		if (err) {
			return res.status(500).send('Server error')
		}
		res.redirect('/students')
	})
})

// 跳转编辑信息页面
router.get('/students/edit', function (req, res) {
	// 1. 在客户端的列表页中处理链接问题（需要有 id 参数）
	// 2. 获取要编辑的学生 id
	// 3. 渲染编辑页面
	// 		根据 id 把学生信息查出来
	// 		使用模板引擎渲染页面
	Student.findById(req.query.id.replace(/"/g, ''), function (err, student) {
		if (err) {
			return res.status(500).send('Server error')
		}
		res.render('edit.html', {
			student : student
		})
	})
})

// 处理更新信息请求
router.post('/students/edit', function (req, res) {
	// 1. 获取表单数据
	// 2. 更新
	// 		Student.update()
	// 	3. 发送响应
	var id = req.body.id.replace(/"/g, '')
	Student.findByIdAndUpdate(id, req.body, function (err) {
		if (err) {
			return res.status(500).send('Server error')
		}
		res.redirect('/students')
	})
})

// 处理删除学生请求
router.get('/students/delete', function (req, res) {
	// 1. 获取要删除的 id
	// 2. 获取 id 执行删除操作
	// 3. 根据操作结果发送响应数据
	var id = req.query.id.replace(/"/g, '')
	Student.findByIdAndRemove(id, function (err) {
		if (err) {
			return res.status(500).send('Server error')
		}
		res.redirect('/students')
	})
})

// 3. 将 router 导出
module.exports = router

// module.exports = function (app) {
// 	app.get('/students', function (req, res) {
// 		// readFile 第二个参数是可以选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf 编码转成我们能认知的字符
// 		// 除了这样来转换之外，也可以通过 data.toString() 方式达成同样的效果
// 		fs.readFile('./db.json', 'utf8', function (err, data) {
// 			if (err) {
// 				return res.status(500).send('Server error')
// 			}
// 			// 从文件中读取到的数据一定是字符串
// 			// 所以这里一定要手动转成对象
// 			var students = JSON.parse(data).students
// 			res.render('index.html', {
// 				fruits : [
// 					'苹果',
// 					'香蕉',
// 					'菠萝'
// 				],
// 				students : students
// 			})
// 		})
// 	})

// 	app.get('/students/new', function (req, res) {
// 	})

// 	app.get('/students/new', function (req, res) {
// 	})

// 	app.get('/students/new', function (req, res) {
// 	})

// 	app.get('/students/new', function (req, res) {
// 	})

// 	app.get('/students/new', function (req, res) {
// 	})

// 	app.get('/students/new', function (req, res) {
// 	})
// }

