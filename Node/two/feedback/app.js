// app application 应用程序
// 把当前模块所有的依赖项都声明在文件模块最上面
// 为了让目录结构保持统一清晰，所以我们约定，将所有的 HTML 文件都放在 view（视图）目录中。
// 我们为了方便的统一处理这些静态资源，我们将所有的静态资源都存放在 public 目录中。
// 哪些资源能被用户访问，哪些资源不能被用户访问，我现在可以通过代码来进行非常灵活的做到

var http = require('http')
var fs = require('fs')
var template = require('art-template')
var url = require('url')

var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

// /pinglun?name=sddfssd&message=sdfsdfadf
// 对于这种表单提交的请求路径，由于其中存在用户动态填写的内容
// 所以你不可能通过去判断完整的 url 路径来处理这个请求
//
// 结论：所以对于我们来讲，其实只需要判定，如果提交的请求路径是 /pinlun 的时候，那么就可以认为提交表单的请求可以过来了

// 简写方式，直接将这个函数变成返回数值
http
	.createServer(function (req, res) {
		// 使用 url.parse 方法将路径解析为一个方便操作的对象，第二个属性为 true 表示直接将查询字符串转为一个对象（通过 query 属性来进行访问）
		var parseObj = url.parse(req.url, true)

		// 单独获取不包含查询字符串的路径部分（该路径不包含问号之后的内容）
		var pathname = parseObj.pathname

		if (pathname === '/') {
			fs.readFile('./views/index.html', function (err, data) {
				if (err) {
					return res.end('404 Not Found.')
				}
				var htmlStr = template.render(data.toString(), {
					comments :comments
				})
				res.end(htmlStr)
			})
		} else if (pathname.indexOf('/public') === 0) {
			// 统一处理：
			// 		如果请求路径是以 /public 开头的，则我认为你要获取 public 目录中的文件
			// 		所以我们就直接可以把请求路径当做文件路径来直接进行读取
			// console.log(url)
			fs.readFile('.' + pathname, function (err, data) {
				if (err) {
					return res.end('404 Not Found.')
				}
				res.end(data)
			})
		} else if (pathname === '/post') {
			// 其它的都处理成 404 找不到
			fs.readFile ('./views/post.html', function (err, data) {
				if (err) {
					return res.end('404 Not Found.')
				}
				res.end(data)
			})
		} else if (pathname === '/pinglun') {
			// 注意：这个时候无论 /pinglun?xxx 之后是什么，都无需担心了，因为 pathname 之后是不会再接受东西的
			// console.log('收到请求了...', parseObj.query)

			var comment = parseObj.query
			comment.dateTime = '2019-9-28 22:04:43'
			comments.unshift(comment)
			// 接下来需要做的：
			// 		1. 获取表单提交的数据 parseObj.query
			// 		2. 生成日期在数据对象中，然后存储在数组中
			// 		3. 让用户重定向跳转到首页 /
			// 			当用户请求 / 的时候，数组中的数据已经发生变化了，所以用户看到的页面也会发生变动

			// 如何通过服务器让客户端重定向
			// 		1. 状态码设置为 302 临时重定向
			// 			状态码：statusCode
			// 		2. 在响应头中通过 Location 告诉客户端往哪儿重定向
			// 			响应头：setHeader
			// 如果客户端发现收到服务器的相应的状态码是 302 就会自动取响应头中找 Location，然后对该地址发起新的请求
			// 所以你就能看到客户端自动跳转了
			res.statusCode = 302
			res.setHeader('Location', '/')
			res.end() // 没有响应数据

		} else {
			// 其它的都处理成 404 找不到
			fs.readFile ('./views/404.html', function (err, data) {
				if (err) {
					return res.end('404 Not Found.')
				}
				res.end(data)
			})
		}
	})
	.listen(3000, function () {
		console.log('running...')
	})
