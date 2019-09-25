var http = require('http')

var server = http.createServer();

server.on('request', function (request, response){
	// console.log('收到请求了，请求路径是'+request.url)
	// response.write('hello')
	// response.write(' world')

	// response.end();

	// 上面的方式比较麻烦，推荐使用更简单的方式
	// response.end('hello nodejs')
	
	// 根据不同的请求路径发送不同的响应结果
	// 1、获取请求路径
	// 		req.url 获取道德是端口号之后的那一部分路径
	// 		也就是说所有的 url 都是以 / 来开头的
	// 2、判断路径处理响应
	
	var url = request.url
	// if (url === '/'){
	// 	response.end('index page')
	// }else if (url === '/login'){
	// 	response.end('login page')
	// }else {
	// 	response.end('404 Not Found.')
	// }
	if (url === '/products'){
		var products = [
			{
				name: '小米',
				price: 19999
			}, 
			{
				name: 'oppo',
				price: 8888
			}, 
			{
				name: '华为',
				price: 12888
			}
		]
	}

	response.setHeader('Content-Type', 'text/Plain; charset=utf-8')
	response.end(JSON.stringify(products))


})

server.listen('3000', function (){
	console.log('服务器启动成功，请通过 http://127.0.0.1:3000 进行访问')
})