// 这是 main.js ， 这是我们项目的 JS 入口文件

// 在这里进行导入
// 导入模块的固定模式
// import ** from *** 是 ES6 中导入模块的方式
import $ from 'jquery'

// 浏览器解析不了这一引入，所以会报错

// 使用 import 语法，导入 css样式表
import './css/index.css'

import './css/index.less'

import './css/index.scss'
// 注意：webpack，默认只能打包处理 JS 类型的文件，无法处理其他的非 JS 类型的文件；
// 如果需要处理 非JS 类型的文件，我们需要手动安装一些适合第三方 loader 加载器；
// 1. 如果想要打包处理 css 文件，需要安装 npm i style-loader css-loader 
// 2. 打开 webpack.config.js 这个配置文件，在里面新增一个配置节点，叫做 module，它是一个对象，这个 module 对象身上有个 rules 属性，这个 rules 属性是一个数组，这个数组中存放了所有 第三方文件的匹配和处理规则

// 注意：webpack 处理第三方文件类型的过程：
// 1. 发现这个 要处理的文件不是 JS 文件，然后就去配置文件中，查找有没有对应的第三方 loader 规则；
// 2. 如果能找到对应的规则，就会调用 对应的 loader 处理这种文件类型；
// 3. 在调用 loader 的时候，是从后往前调用的；
// 4. 当最后一个 loader 调用完毕，会把处理的结果的结果，直接交给 webpack 进行打包合并，最后输出到 bundle.js 中去


$(function () {
    $('li:odd').css('backgroundColor', 'blue')
    $('li:even').css('backgroundColor', function () {
        return '#' + 'D97634'
    })
})

// webpack 可以做到什么？
/**
 * webpack 可以处理 JS 文件的相互依赖关系
 * webpack 可以处理 JS 的兼容问题，把高级的浏览器不识别的语法转为浏览器能正常识别的语法
 */

 /**
  * 使用 webpack-dev-server 这个工具，来实现自动打包编译的功能
  * 1. 运行 npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
  * 2. 安装完毕后，这个工具的用法，和 webpack 命令的用法，完全一样
  * 3. 由于，我们实在项目中，本地安装的 webpack-dev-server，所以，无法把它当作脚本命令，在 powershell 终端中运行；（只有那些安装到 全局 -g 的工具，才能在终端中正常运行）
  * 4. 注意：webpack-dev-server 这个工具，如果想要正常运行，要求，在本地项目中，必须安装 webpack 
  * 5. webpack-dev-server 帮我们打包生成的 bundle.js 文件，并没有存放到实际的 物理硬盘上，而是直接托管到了 电脑的内存 中，所以，我们在项目根目录中，根本找不到这个打包好的 bundle.js 文件
  * 6. 我们可以认为，webpack-dev-server 把打包好的文件，以一种虚拟的形式，托管到了项目的 根目录中，虽然我们看不到它，但是可以认为，和 dist src node_modules 平级，有一个看不到的文件，叫做 bundle.js
  */