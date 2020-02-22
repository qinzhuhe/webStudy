# `webpack-dev-server`

在 `webpack` 中，为了方便使用者的快速开发，它拥有着使用 `webpack-dev-server` 这个工具，来帮助实现自动打包编译的功能。



### 使用说明

1. 运行 `npm i webpack-dev-server -D` 把这个工具安装到项目的本地开发依赖

2. 安装完毕后，这个工具的用法，和 `webpack` 命令的用法，完全一样

3. 由于，我们在项目中，本地安装的 `webpack-dev-server`，所以，无法把它当作脚本命令在 `powershell` 终端中运行；

   > 只有那些安装到 全局 -g 的工具，才能在终端中正常运行

4. 要求在本地项目中，必须安装 `webpack `。

5. `webpack-dev-server` 帮我们打包生成的 `bundle.js` 文件，并没有存放到实际的 物理硬盘上，而是直接托管到了 电脑的内存 中，所以，我们在项目根目录中，根本找不到这个打包好的 `bundle.js` 文件

6. 我们可以认为，`webpack-dev-server` 把打包好的文件，以一种虚拟的形式，托管到了项目的 根目录中，虽然我们看不到它，但是可以认为，和 `dist src node_modules` 平级，有一个看不到的文件，叫做 `bundle.js`



### 常用命令

- `--open` => 设置后会在启动 `webpack-dev-server` 时自动打开浏览器

  ```json
   "dev": "webpack-dev-server --open",
  ```

- `--port 端口号` => 自定义设置 `webpack-dev-server`  启动端口

  ```json
  "dev": "webpack-dev-server --port 3000"
  ```

- `--contentBase 目录名` => 自定义设置启动目录

  ```json
   "dev": "webpack-dev-server --open --port 3000 --contentBase src"
  ```

- `--hot` => 启用热更新（设置浏览器无刷新）

  ```json
  "dev": "webpack-dev-server --open --port 3000 --contentBase src --hot"
  ```

  

