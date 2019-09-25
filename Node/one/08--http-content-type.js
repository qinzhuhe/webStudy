var http = require('http')

var server = http.createServer()

server.on('request', function (request, response){

	var url = request.url
	if (url === '/plank'){
		response.setHeader('Content-Type', 'text/Plain; charset=utf8')
		response.end('hello 世界')
	}else if(url === '/html'){
		response.setHeader('Content-Type', 'text/Plain; charset=utf8')
		response.end('<p>hello html <a href="">点我</a></p>')
	}
})

server.listen('8080', function (){
	console.log('服务器启动成功啦...')
})