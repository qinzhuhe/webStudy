var fs = require('fs')

var http = require('http')

var server = http.createServer()

server.on('request', function (request, response){

	var url = request.url

	if(url === '/'){
		fs.readFile('./resourse/index.html', function (err, data){
			if (err){
				response.setHeader('Content-Type', 'text/Plain; charset = utf8')
				response.end('文件读取失败，请稍后重试')
			}else {
				response.setHeader('Content-Type', 'text/html; charset = utf8')
				response.end(data)
			}
		})
	}else if (url === '/img'){
		fs.readFile('./resourse/niya.jpg', function (err, data){
			if (err){
				response.setHeader('Content-Type', 'text/Plain; charset = utf8')
				response.end('文件读取失败，请稍后重试')
			}else {
				response.setHeader('Content-Type', 'image/jpeg; charset = utf8')
				response.end(data)
			}
		})
	}

})

server.listen('8080', function (){
	console.log('服务器启动成功啦...')
})