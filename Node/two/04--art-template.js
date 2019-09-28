// art-template
// art-template 不仅可以在浏览器使用，也可以在node中使用

// 安装：
//  	npm install art-template
//  	该命令在哪执行就会把包下载到哪里。默认会下载到 node_modules 目录中
//  	node_modules 不要改，也不支持改
 	
// 在 Node 中使用 art-template 模板引擎
// 模板引擎最早就是诞生于服务器领域，后来才发展到了前端

// 1. 安装 npm install art-template
// 2. 在需要使用的文件模块中加载 art-template
// 	  只需要使用 require 方法加载就可以了：require('art-template')
// 	  参数中的 art-template 就是你下载的包的名字
// 	  也就是说 install 的名字是什么，则 require 中的就是什么
// 3. 查文档，使用模板引擎的 API

var template = require('art-template')

var fs = require('fs')

// 这里不是浏览器
// template('script id 对象')

var tplStr = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>在浏览器中使用art-template</title>
</head>
<body>
<script src="code/node_modules/art-template/lib/template-web.js"></script>
<script type="text/template" id="tpl">
<p>大家好，我叫做：{{ name }}</p>	
<p>我今年{{ age }}岁了</p>	
<h1>我来自{{ province }}</h1> 
<p>我喜欢：{{ each like }} {{$value}} {{/each}}</p>
</script>
</body>
</html>
`

fs.readFile('./tpl.html', function (err, data) {
	if (err) {
		return console.log('读取文件失败了')
	}
	// 默认读取的 data 是二进制数据
	// 二模板引擎的 render 方法需要接受的是字符串
	// 所以在这里需要将 data 进行转型
	var ret = template.render(data.toString(), {
		name: 'Jack',
		age : 18,
		province : '中国',
		like : [
			'写代码',
			'哈哈哈',
			'啦啦啦'
		],
		title : '个人信息'
	})
	console.log(ret)
})

// template.render('模板字符串', '替换对象')

