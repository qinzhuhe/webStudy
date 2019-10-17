// 封装增删改查 API
/**
 * students.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */

var fs = require('fs')
var dbPath = './db.json'

/**
 * 获取所有学生列表
 * return []
 */
exports.find = function (callback) {
	// callback 中的参数
	// 		第一个参数是 err
	// 			成功 bull
	// 			错误 错误对象
	// 		第二个参数是 结果
	// 			成功 数组
	// 			错误 undefined
	// 	return []
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		callback(null, JSON.parse(data).students)
	})
}


/**
 * 获取需要编辑的学生信息
 */
exports.findById = function (id , callback) {
	fs.readFile(dbPath, 'utf8', function (err ,data) {
		if(err){
			return callback(err)
		}
		var stu = JSON.parse(data).students
		var ret = stu.find(function (item) {
			return item.id === parseInt(id)
		})
		callback(null, ret)
	})
}

/**
 * 添加保存学生
 */
exports.save = function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}

		var students = JSON.parse(data).students

		// 处理 id 唯一的，不重复
		student.id = students[students.length - 1].id + 1

		// 将用户传递的对象保存到数组中
		students.push(student)

		// 将对象数据转换成字符串
		var fileData = JSON.stringify({
			students: students
		})

		// 把字符串保存到文件中
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				// 错误就是把错误对象传递给它
				return callback(err)
			}
			// 成功就是没错，所以错误对象是 null
			callback(null)
		})
	})
}


/**
 * 更新学生
 */
exports.update = function (student, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}
		var students = JSON.parse(data).students

		// 注意，这里记得将 id 统一为int型
		student.id = parseInt(student.id)

		// 需要修改谁，就需要把谁找出来
		// es6 中的一个数组方法：find
		// 需要接受一个函数作为参数
		// 当某个遍历项符合 item.id === student.id 条件的时候，find 会种植遍历，同时返回遍历项结果
		var stu = students.find(function (item) {
			return item.id === parseInt(student.id)
		})

		for (var key in student) {
			stu[key] = student[key]
		}

		// 将对象数据转换成字符串
		var fileData = JSON.stringify({
			students: students
		})

		// 把字符串保存到文件中
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				// 错误就是把错误对象传递给它
				return callback(err)
			}
			// 成功就是没错，所以错误对象是 null
			callback(null)
		})
	})
}


/**
 * 删除学生
 */
exports.delete = function (id, callback) {
	fs.readFile(dbPath, 'utf8', function (err, data) {
		if (err) {
			return callback(err)
		}

		var students = JSON.parse(data).students

		var deleteId = students.findIndex(function (item) {
			return item.id === parseInt(id)
		})

		// 根据下标从数组中删除对应的对象
		students.splice(deleteId, 1)

		// 将对象数据转换成字符串
		var fileData = JSON.stringify({
			students: students
		})

		// 把字符串保存到文件中
		fs.writeFile(dbPath, fileData, function (err) {
			if (err) {
				// 错误就是把错误对象传递给它
				return callback(err)
			}
			// 成功就是没错，所以错误对象是 null
			callback(null)
		})

	})
}
