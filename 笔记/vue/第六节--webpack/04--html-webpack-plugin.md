# html-webpack-plugin

此插件可以根据 `index.html` 模板页面，生成了一个内存中的 `index.html`。

插件的两个作用：

1. 自动在内存中根据指定页面生成一个内存的页面
2. 自动把打包好的 `bundle.js` 追加到页面中



### 安装使用

- 安装

```shell
npm i html-webpack-plugin -D
```

- 在 `webpack.config.js` 文件中导入该插件

```javascript
const htmlWebpackPlugin = require('html-webpack-Plugin')
```

> 只要是插件，都要放在 plugins 节点当中去

- 创建一个在 内存中 生成 HTML 页面的插件

```javascript
new htmlWebpackPlugin({ })
```

- 指定模板页面，将来会根据指定的页面路径，去生成内存中的 页面

```javascript
template : path.join(__dirname, './src/index.html'),
```

- 指定生成的页面的名字

```javascript
filename : 'index.html'
```





### 完整代码

```javascript
plugins : [
    new htmlWebpackPlugin({
        template : path.join(__dirname, './src/index.html'), 
        filename : 'index.html'
    })
],
```



