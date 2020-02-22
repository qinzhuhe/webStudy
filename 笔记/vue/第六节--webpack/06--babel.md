# `babel`

在实际开发时，我们会发现，因为浏览器之间对于 `ES` 语法支持具有着差异性的特点，在我们使用 `ES6` 语法进行运行时，往往会出现意料之外的错误；而这种差异性不仅仅存在于浏览器，在 `node` 环境里也存在这样的问题，各个版本对于 `ES` 的支持都是不同的，所以我们需要使用到 `babel`。



### 1. 初识

`babel` 有着以下几个组成模块：

- `@babel/cli`
- `@babel/core`
- `@babel/preset-env`
- `@babel/polyfill`
- `@babel/runtime`
- `@babel/plugin-transform-runtime`
- `@babe;/plugin-transform-xxx`

`@`符号是 `babel 7`  特有的，这是 `babel 7` 的一个重大调整，原来的 `babel-xx` 统一迁移到 `babel` 域下，由 `@` 符号来标识。

### 2. 命令行工具

`@babel/cli` 是 `babel` 提供的内建的命令行工具，主要是提供 `babel` 这个命令来对 `js`文件进行编译，这里要注意它与另一个命令行工具 `@babel/node` 的区别，首先要知道他们二者都是命令行工具，但是官方文档明确对他们定义了他们各自的使用范围：

-  `@babel/cli` 是一个适合安装在本地项目里，而不是全局安装。

- `@babel/node` 跟`node cli` 类似，不适用在产品中，意味着适合全局安装。

除了这个不同以外，他们还有一个共同点就是，直接使用它们编译，上来就会报个错

> 找不到@babel/core

原因是 `@babel/cli` 是依赖一个叫 `@babel/core` 的包文件的，没有这个包文件是绝对不能执行任何编译操作的（因为执行编译的 `transform` 方法在这个包里）。

但是仅仅如此也不能使文件进行编译，因为在 `Babel 6` 做了大量模块化的工作，将原来集成一体的各种编译功能分离出去，独立成插件。这意味着，默认情况下，当下版本的 `babel` 不会编译代码。

所以在初次之外，我们就需要使用到不同的插件来帮助进行代码的编译。



### 3. 插件

- 要将箭头函数编译成普通函数需要使用： 

  `@babel/plugin-transform-arrow-functions`

- 要将 `const` 或者let变量编译成 `var` 变量需要：

  `@babel/plugin-transform-block-scoping`

- 要将 `class` 关键字转换成传统基于原型的类需要：

​	`@babel/plugin-transform-classes`

由此可以知道，为了真正的编译，我们在实际开发中需要大量各种的插件。

> [参考](https://babeljs.io/docs/en/plugins)

但是，大量插件的使用同样会导致两个问题：

- 多个插件使用会导致开发效率变慢，因为在调配时，需要花费不少时间来进行插件的调用代码书写，例：

  ```shell
  babel test.js --plugins @babel/plugin-transform-arrow-functions
  ```

  解决这种方法，我们可以创建一个名为 `.babelrc` 的文件，这样就不用写很长的命令行参数了，例如同样时使用这样的插件，我们在 `.babelrc` 文件中写上：

  ```bash
  {
    "plugins": [
      "@babel/plugin-transform-arrow-functions"
      "@babel/plugin-transform-block-scoping" 
    ]
  }
  ```

  那么在进行使用，就可以直接对代码进行编译了。

- 第二个问题是同样是关于多个插件的使用的，如果我的代码中大量使用插件，那我依然避免不了在配置文件中大量填写插件信息的工作，但是伟大的 `babel`为了让程序员们有更多的时间做自己喜爱的事情，而不是浪费生命在一个一个的挑选插件，然后把它们写在 `.babelrc` 上，它提供了一个叫做**preset**的概念，说好听点叫**预设**，直白点就是**插件包**的意思，意味着babel会预先替我们做好了一系列的插件包，例如下面这些babel认为程序员会用到的常用的插件包：

  - [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env)

  - [@babel/preset-flow](https://babeljs.io/docs/en/babel-preset-flow)
  - [@babel/preset-react](https://babeljs.io/docs/en/babel-preset-react)
  - [@babel/preset-typescript](https://babeljs.io/docs/en/babel-preset-typescript)



### 4. 插件包

##### 安装：

```shell
npm i @babel/preset-env -D
```

##### 配置：

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "4"
        }
      }
    ]
  ]
}
```

> 默认情况下，`babel-preset-env` 等效于三个插件包。

```json
{
 "targets": {
      "node": "4"
  }
}
```

这个`targets`实际上是针对上面的 `@babel/preset-env` 这个插件包的一个配置参数，它所代表的是你编译代码所针对的目标平台，我们这里的目标是版本号为4的node。

> 友情提示：node -v  命令可以检查node的版本。

也就是我编译之后的代码能够在node版本号为4的环境下运行，同样大家可以做个试验，如果将 `node` 这个4 改为 6，再次编译，你会发现编译之后的代码和编译之前的代码没有任何变化，这表明原始的代码实际上已经可以直接在版本为 6 的 `node` 上直接运行，不需要 `babel` 的编译了。

当然这里的targets参数配置除了可以设置node环境外，还可以设置针对各个浏览器环境的配置，例如：

```json
{
  "targets": {
    "chrome": "58",
    "ie": "11"
  }
}
```

当然针对浏览器差异的设置比 `node` 更多更灵活和复杂。

[关于更多](https://github.com/browserslist/browserslist)

查看所有的配置参数信息。



### 5. 使用

引用过所需的插件包后，打开 `webpack` 的配置文件，在 `module` 节点下的 `rules` 数组中，添加一个新的匹配规则：

```javascript
{ test ： /\.js$/, use : 'babel-loader', exclude : /node_modules/ }
```

注意：在配置 babel 的 loader 规则的时候，必须把 node_modules 目录，通过 exclude 选项排除掉，原因如下：

1. 如果不排除 node_modules，则 Babel 会把 node_modules 中所有的 第三方 JS 文件都打包编译，这样会非常消耗 CPU，同时，打包速度非常慢；
2. 哪怕最终 Babel 把所有的 node_modules 中的 JS 转换完毕了，但是，项目也无法正常运行;

然后就是创建 `.babelrc` 文件，然后对相应的插件进行相应的配置就行了，不过需要注意，这个配置文件，属于 `JSON` 格式，所以，在写 `.babelrc` 配置的时候，必须符合 `JSON` 的语法规范：不能写注释，字符串必须用双引号；



> 当然这些只是 `babel` 中的一小部分，但理解了这些也能理解它的主要意义和基本使用了。

