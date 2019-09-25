# 服务器模块--`http`

Node 中提供了一个核心模块：http
http 这个模块的职责就是为了帮助创建编写服务器的



### 1. 使用方法



#### 1.1 加载 http 核心模块

```javascript
   var http = require('http')
```

   

#### 1.2 创建web服务器

使用 `http.createServer()` 方法创建一个 Web 服务器

```javascript
// 返回一个 Server 实例
var server = http.createServer()
```



#### 1.3 服务器的作用

- 提供服务：对 数据的服务

  - 发请求

  - 接受请求

   - 处理请求
    
   - 给个反馈（发送响应）
     
   - 注册 request 请求事件	

当客户端请求过来，就会自动触发服务器的 request 请求事件，然后执行第二个参数，回调处理函数。

```
server.on('request', function (){
    	console.log('收到客户端的请求')
})
```



#### 1.4 绑定端口号，启动服务器

```javascript
server.listen(3000, function (){
	console.log('服务器启动成功了...');
})
```



### 2. `request` 请求事件处理函数



#### 2.1 使用`request` 

使用`request` 请求事件处理函数，需要接受两个参数：

1. `Request`  (`req`)
   		请求对象可以用来获取客户端的一些请求信息，例如请求路径
2. `Response`
   		响应对象可以用来给客户端发送响应消息

```javascript
server.on('request', function (request,response){
	console.log('收到客户端的请求了，请求路径是'+request.url)

	// response 对象有一个方法：write 可以用来给客户端发送响应数据
	// write 可以使用多次，但是最后一定要使用 end 来结束响应，否则客户端会一直等待
	response.write('hello')
	response.write(' nodejs')

	// 告诉客户端，我的话说完了，你可以呈递给用户了
	response.end();
})
```

