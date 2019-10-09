var fs = require('fs')

// 文件擦做中的路径可以忽略 ./
fs.readFile('data/a.txt', function (err, data) {
	if (err) {
		return console.log('读取失败')
	}
	console.log(data.toString())
})