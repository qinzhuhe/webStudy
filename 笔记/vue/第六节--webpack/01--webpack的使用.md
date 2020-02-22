# `webpack`

### 1. 简介

`webpack` 是前端的一个项目构建工具，它是基于 `Node.js` 开发出来的一个前端工具。

它能够处理错综复杂的包依赖关系，同时还能解决因此引发的众多二次请求。 



#### 2. 安装方法

##### 2.1

在 `webpack` 4.0 版本中，想要对文件进行打包，方式和以往不同，因为更新后的语法更加严格，

所以需要在使用时对文件进行版本确认，同时命令发生了改变：

```shell
webpack .\main.js --output-filename .\dist\bundle.js --output-path
```

- `--output-filename` -- 输出文件名
- `--output-path` -- 输出路径

可简写为：

```shell
webpack .\main.js -o .\dist\bundle.js
```

##### 2.2

同时你需要对 `webpack` 的使用模式(`mode`)进行声明，一共两种模式：

- 生产模式(`production`)

- 开发模式(`development`)

```shell
webpack main.js --output-filename bundle.js --output-path . --mode development
```

可简写为：

```shell
webpack main.js -o bundle.js --mode development
```



### 3. 简单使用

在实际开发中，不推荐直接在页面引用任何包和二次相应的资源，所以我们可以创建一个入口文件(`main.js`)，并在该入口文件进行导入，导入模块的固定模式。

- import  **  from  *** => 这是 ES6 中导入模块的方式

```javascript
import $ from 'jquery' // 例如
```

但是浏览器解析不了这一引入，所以会发生报错，故此可以通过`webpack` 这么一个前端构建工具，将 `main.js` 进行了处理，生成了 `bundle.js` 文件



### 4. `webpack`执行过程

当我们在控制台，直接输入 `webpack` 命令执行的时候，`webpack` 做了以下几步



1. 首先，`webpack`发现，我们并没有通过命令的形式，给它指定入口和出口；
2.  `webpack` 就会去项目的根目录中，查找一个叫做 `webpack.config.js` 的配置文件；
3. 当找到配置文件后，`webpack` 会去解析执行这个配置文件，当解析执行完毕配置文件后，就得到了配置文件中，导出的配置对象；
4. 当 `webpack` 拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建；