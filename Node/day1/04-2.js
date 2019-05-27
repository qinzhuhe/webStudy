// 当请求不同的路径的时候可以响应不同的结果
	// 例如：
	// 		/-----index
	// 		/login------登录
	// 		/register-------注册
	// 		/haha---------哈哈
	var http=require('http');
	var server=http.createServer();
	// 当使用request请求事件函数回调时，其中包含了请求对象request参数和响应对象reponse参数
	server.on('request',function(req,res){

		// 定义对象装取请求对象参数url地址
		var url = req.url;
		// if(url==='/')
		// {
		// 	res.end('index page');
		// }
		// else if(url==='/login')
		// {
		// 	res.end('login page');
		// }
		// else if(url==='/register')
		// {
		// 	res.end('register page');
		// }
		// else{
		// 	res.end('404 Not Found');
		// }
		if(url==='/products'){
			var products = [
				{
					name:'李明珂',
					price:1888
				},
				{
					name:'霍进',
					price:2888
				},
				{
					name:'猴子',
					price:8888
				}
			]
			res.end(JSON.stringify(products));
		}
	})
	server.listen(3000,function(){
		console.log('服务器响应成功');
	})
