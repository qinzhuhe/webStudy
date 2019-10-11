# 在 Express 中获取表单请求

## 获取 GET 请求参数

Express 内置了一个 API，可以直接通过`req.jquery`来获取

```
req.query
```



## 获取 POST 请求体数据

在 Express 中没有内置获取表单 POST 请求体的 API，这里我们需要使用第一个第三方包，`body-parser`

### 安装
```javascript
npm install --save body-parser
```

### 配置



```javascript
var express = require('express')
// 0. 引包
var bodyParser = require('body-parser')

var app = express()

// 配置 body-parse
// 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body
// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
```

### 使用

```javascript
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  // 可以通过 req.body 来获取表单请求体数据
  res.end(JSON.stringify(req.body, null, 2))
})
```

