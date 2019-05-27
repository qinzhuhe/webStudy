// 加载http核心模块
var http = require('http')

// 使用http.createServer方法搭建服务器
var server = http.createServer();

// 服务器功能，request请求事件，表示已经收到客户端请求
//
//
// request 请求事件处理函数，需要接受两个参数：
// 		Request 请求对象和Reponse 响应对象
server.on('request',function(request,reponse){
	console.log('收到客户端请求，请求路径是:' + request.url)//请求路径url
	// 对客户端发送响应数据
	reponse.write('hello');
	reponse.write(' Node.js');
	// 使用end关闭结束响应，不然客户端会一直等待
	reponse.end();
})
// 绑定端口号，启动服务器
server.listen(3000,function(){
	console.log('服务器启动成功，请访问http://127.0.0.1:3000');
})