var http = require('http')
var fs =require('fs')

var www = './html'

var server = http.createServer()

server.on('request',function(req,res){
	var url = req.url

	var filePath='/index.html'

	if(url !== '/'){
		filePath = url
	}
	// console.log(www + filePath)
	fs.readFile(www + filePath, function(err,data){
		if(err)
		{
			return res.end('404 Not Found.')
		}
		res.end(data)
	})

})

server.listen(3000,function(){
	console.log('服务器启动成功......')
})