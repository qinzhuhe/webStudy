// 载入http模块
var http = require('http')
// 载入fs模块
var fs = require('fs')

// 创建server
var server = http.createServer();

// 监听 server 的 request 请求事件，设置请求处理函数
// 请求
// 处理
// 响应
// 一个请求对应一个响应，如果在一个请求的过程中，已经结束响应了，则不能重复发送响应。
// 没有请求就没有响应。

var wwwDir = 'E:/www/summary'

server.on('request', function (req,res) {
	var url = req.url
	if (url === '/') {
		fs.readFile(wwwDir + '/select.html', function (err, data) {
			// if (err) {
			// 	res.end('404 Not Found')
			// } else {

			// }
			// 更推荐使用这种形式
			if (err) {
				// return 有两个作用：
				// 	1. 方法返回值
				// 	2. 阻止代码继续往后执行
				return res.end('404 Not Found')
			}
			res.end(data)
		})
	} else if (url === '/index.html') {
		fs.readFile(wwwDir + '/select.html', function (err, data) {
			if (err) {
				return res.end('404 Not Found')
			}
			res.end(data)
		})
	} else if (url === '/a.txt') {
		fs.readFile(wwwDir + '/weather.html', function (err, data) {
			if (err) {
				return res.end('404 Not Found')
			}
			res.end(data)
		})
	}
	else {
		res.end('404 Not Found')
	}
})

// 给server分配一个端口，并打开服务
server.listen(3000, function (){
	console.log('running...')
})