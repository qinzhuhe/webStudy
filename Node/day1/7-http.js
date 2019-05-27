var http =require('http');

var server = http.createServer();

server.on('request',function(req,res){


	var url = req.url;
	if(url === '/plain'){
		res.setHeader('Content-Type','text/plain; charset=utf-8');
		res.end('hello 世界');

	}else if(url === '/html'){
		res.setHeader('Content-Type','text/html; charset=utf-8');
		res.end('<b>hello html <a href="#">点我</a></b>');
	}

})

server.listen(3000,function(){
	console.log('服务器启动成功')
})
