# express

### 起步

- 安装

    ```shell
    // 创建 package.json 文件
    npm init --y

    // 下载 express
    npm i -S express
    ```
- 使用
    ```javascript
    // 引入 express
    var express = require('express')

    创建 app
    var app = express()

    //设置监听端口
    app.listen(3000, function () {})
    ```



### 基本路由

路由器

- 请求方法

- 请求路径

- 请求处理函数

  - get

  ```javascript
  // 当你以 GET 方法请求 / 的时候，执行对应的函数处理
  app.get('/', function (req, res) {
  	res.send('hello world')
  })
  ```

  - post

  ```javascript
  // 当你以 POST 方法请求 / 的时候，执行对应的函数处理
  app.post('/', function (req, res) {
  	res.send('Got a POST request')
  })
  ```



### 静态服务

```javascript
// public 资源
app.use(express.static('./public/'))

// /a/xxx
app.use('/a', express.static('./public/'))

// /public/xxx
app.use('/public', express.static('./public/'))

app.use('/static', express.static(path.join(__dirname, 'public')))
```

