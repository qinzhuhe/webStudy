var http = require('http')
var fs = require('fs')
var template = require('art-template')

var server = http.createServer()

var wwwDir = 'C:/www'

server.on('request', function (req,res) {
	var url = req.url
	fs.readFile('./code/template.html', function (err, data) {
		if (err) {
			return res.end('404 Not Found.')
		}

		fs.readdir(wwwDir, function (err, files) {
		if (err) {
			return res.end('Can not find www dir.')
		}

		// 这里只需要使用模板引擎解析替换 data 中的模板字符串就可以了
		// 数据就是 files
		// 然后去你的 template.html 文件中编写你的模板语法就可以了

		var htmlStr = template.render(data.toString(), {
			title : '测试'
		})
		
		// 发送解析替换后的响应数据
		res.end(htmlStr)

		})
	})
})

server.listen('3000', function () {
	console.log('running...')
})