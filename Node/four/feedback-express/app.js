var express = require('express')

// 0. 引包
var bodyParser = require('body-parser')

var app = express()

app.use('/public/', express.static('./public/'))

app.engine('html', require('express-art-template'));

// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

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

app.get('/', function (req, res) {
	res.render('index.html', {
		comments: comments
	})
})

app.get('/post', function (req, res) {
	res.render('post.html')
})

// 当以 POST 请求 /post 的时候，执行指定的处理函数
// 这样的话我们就可以利用不同的请求方法让一个请求路径使用多次
app.post('/post', function (req, res) {
	// console.log('收到表单 post 请求了')
	// 1. 获取表单 POST 请求体数据
	// 2. 处理
	// 3. 发送响应
	// req.query 只能获取 get 请求体参数
	// console.log(req.query)

  // console.log(req.body)

  var comment = req.body
  comment.dateTime = '2017-08-03 10:28:30'
  comments.unshift(comment)

  // res.send
  // res.redirect
  // 这些方法 Express 会自动结束响应
  res.redirect('/')

})

app.listen(3000, function (){
	console.log('feedback running ...')
} )