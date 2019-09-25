// Node 中提供了一个核心模块：http
// http 这个模块的职责就是为了帮助创建编写服务器的

// 1、加载 http 核心模块
var http = require('http')

// 2、使用 http.createServer() 方法创建一个 Web 服务器
// 返回一个 Server 实例
var server = http.createServer()

// 3、服务器的作用
// 		提供服务：对 数据的服务
// 		发请求
// 		接受请求
// 		处理请求
// 		给个反馈（发送响应）
// 		注册 request 请求事件
// 		当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数，回调处理函数
server.on('request', function (){
	console.log('收到客户端的请求')
})

// 4、绑定端口号，启动服务器
server.listen(3000, function (){
	console.log('服务器启动成功了，可以通过 http://127.0.0.1:3000 来进行访问');
})
