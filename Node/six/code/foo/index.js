var fs = require('fs')
var path = require('path')

// ./a.txt 相对于当前文件路径
// ./a.txt 相对于执行 node 命令所处的终端路径
// 这不是错误，Node 本身就是这样设计的
// 也就是说，文件操作路径中，相对路径设计的就是相对于执行 node 命令所处的路径

// fs.readFile('C:/Users/沁竹河/Desktop/web学习/Node/six/code/foo/a.txt', 'utf8', function (err, data) {
// 	if (err) {
// 		throw err
// 	}
// 	console.log(data)
// })


// C:/Users/沁竹河/Desktop/web学习/Node/six/code/foo
fs.readFile(path.join(__dirname + '/a.txt', 'utf8'), function (err, data) {
	if (err) {
		throw err
	}
	console.log(data)
})