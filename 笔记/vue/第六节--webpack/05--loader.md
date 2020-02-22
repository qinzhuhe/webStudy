# loader

在开发时，我们难免会使用到 除了 `js` 之外的文件引入（例如：`css`，`less`等），但是 `webpack`，默认只能打包处理 `JS` 类型的文件，无法处理其他的非 `JS` 类型的文件。

如果需要处理 非 `JS` 类型的文件，我们就需要手动安装一些适合第三方 `loader` 加载器。

1. 如果想要打包处理 `css` 文件，需要安装对应的 `css` 处理 `loader`。

   - `style-loader`
   - `css-loader`

   ```shell
   npm i style-loader css-loader -D 
   ```

2. 打开 `webpack.config.js` 这个配置文件，在里面新增一个配置节点，叫做 `module`，它是一个对象。

	- 这个 `module` 对象身上有个 `rules` 属性，这个 `rules` 属性是一个数组，这个数组中存放了所有 第三方文件的匹配和处理规则。



### 1. 处理 `CSS`

- `module : { }`
  - 这个节点，用于配置 所有 第三方模块 加载器。

- `rules : [ ]`
  - 所有第三方模块的 匹配规则。

- `{test : /\.css$/, use : ['style-loader', 'css-loader']}` 
  - 配置处理 css 文件的 第三方 loader 规则,使用了正则表达式进行筛选（`/\.css$/`）;
  - 规则会 从右到左来调用。

##### 完整代码

```javascript
module : {
  rules : [
    { test : /\.css$/, use : ['style-loader', 'css-loader'] },
  ]
}
```



### 2. 处理`less`

##### 2.1 安装

导入 `less` 处理 loader规则：

```shell
npm i less -D
npm i less-loader -D
```

##### 2.2 使用

在 `webpack.config.js` 文件中进行配置，配置过程与 `css` 相仿：

```javascript
// 处理 less 文件的第三方 loader 规则
{ test : /\.less$/, use : ['style-loader', 'css-loader', 'less-loader'] },
```



### 3. 处理 `sass`

##### 3.1 安装

导入 `sass` 处理 loader规则：

```shell
npm i node-sass -D // 导入 sass 的 loader规则需要先加载这个包
npm i sass-loader -D
```

##### 3.2 使用

在 `webpack.config.js` 文件中进行配置，配置过程与 `css` 相仿：

```javascript
// 处理 sass 文件的第三方 loader 规则
{ test : /\.scss$/, use : ['style-loader', 'css-loader', 'sass-loader'] }
```





### 4. 代码解析

注意：`webpack` 处理第三方文件类型的过程：

1. 发现这个 要处理的文件不是 `JS` 文件，然后就去配置文件中，查找有没有对应的第三方 `loader` 规则；
2. 如果能找到对应的规则，就会调用 对应的 `loader` 处理这种文件类型；
3. 在调用 `loader` 的时候，是从后往前调用的；
4. 当最后一个 `loader` 调用完毕，会把处理的结果的结果，直接交给 `webpack` 进行打包合并，最后输出到 `bundle.js` 中去。



### 5. 处理url路径

默认情况下，webpack 无法处理 css 文件中的 url 地址，不管是图片还是字体库，只要是 URL 地址，都无法处理。

所以我们需要借助相应的 `loader` 进行处理。

##### 5.1 安装

```shell
npm i url-loader file-loader -D
```

`url-loader` 依赖于 `file-loader`。

##### 5.1 使用

在 `webpack.config.js` 文件中进行配置，配置过程与 `css` 相仿：

```javascript
{ test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/, use : 'url-loader' }
```

- 在使用时，如果不进行处理，图片会被自动处理成 `base64` 的图片编码。

- 如果想要正常的路径，则需要对图片的 `limit` 进行设置

  - `limit` 给定的值是图片的大小，单位是 `byte`，如果我们引用的图片，大于或等于给定的 `limit` 值，则不会被转成 `base64` 格式的字符串。

  - 如果图片小于给定的 `limit` 值，则会被转为 `base64` 的字符串。

    ```javascript
     { test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/, use : 'url-loader?limit=1000' }
    ```

- 如果想要图片的名字格式不变，则需要设置图片的 `name` 属性值

  ```javascript
  { test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/, use : 'url-loader?limit=1000&name=[name].[ext]' }
  ```

- 给图片设置 `hash ` 前缀

  如果不想图片名字不变，且同时有不同文件夹中的同名图片，在页面中显示，则需要设置`hash` 进行区分。

  ```javascript
  { test: /\.(png|svg|jpg|gif|jpeg|ico|woff|woff2|eot|ttf|otf)$/, use : 'url-loader?limit=1000&name=[hash:8]-[name].[ext]' }
  ```



### 6. 处理字体图标



