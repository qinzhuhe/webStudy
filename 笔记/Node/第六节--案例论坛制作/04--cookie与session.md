## cookie
cookie因为自身的安全性与不稳定性，通常用来使用保存用户名、购物车物品信息等，不建议使用 cookie 来保存敏感信息



## session

而在面对一些需要保存的敏感状态时，则推荐选择使用 session。
- 唯一的，不可找回
- 一旦丢失，状态丢失
- 伪造性较低



## express-session

> Express 这个框架中默认是不存在 Session 和 Cokkie 的，但是我们可以使用第三方中间件：express-session 来解决。

1. 安装：

```shell
npm install express-session
```

2. 配置  =>  一定要在 app.use(router) 之前

```javascript
var session = require('express-session')
// 该插件回味 req 请求对象添加一个成员：req.session 默认是一个对象
// 这是最简单的配置方式
app.use(session({
    // 配置加密字符串，他会在原有加密基础之上和这个字符串平起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret：'itcast',
    resave: false,
    saveUninitialized: false // 无论你是否使用 Session，都默认分配一把钥匙
}))
```

3. 使用

```javascript
// 当将插件配置好后，就可以通过 reqi.session 来访问和设置 Session 成员
// 添加 Session 数据
req.session.foo = 'bar'
// 访问 Session 数据：
req.session.foo
```

> 提示：默认 Session 数据是内存存储的，服务器一旦重启就会丢失，真正的生产环境会将 Session 进行持久化存储。