const path = require('path')

// 导入在内存中生成 HTML 页面的插件
// 只要是插件，都要放在 plugins 节点当中去
const htmlWebpackPlugin = require('html-webpack-Plugin')

// 这个配置文件，起始就是一个 JS 文件，通过 Node 中的模块操作，向外暴露了一个配置对象
module.exports = {
    // 在配置文件中，需要手动指定 入口和出口
    entry : path.join(__dirname, './src/main.js'),
    //入口，表示，要使用webpack 打包哪个文件
    output : {
        //指定打包好的文件，输出到哪个目录中去
        path : path.join(__dirname, './dist'), 
        filename : 'bundle.js' // 指定输出的名称
    },
    plugins : [
        new htmlWebpackPlugin({ // 创建一个在 内存中 生成 HTML 页面的插件
            template : path.join(__dirname, './src/index.html'), // 指定模板页面，将来会根据指定的页面路径，去生成内存中的 页面。
            filename : 'index.html' // 指定生成的页面的名字
        }) 
    ],
    module : { // 这个节点，用于配置 所有 第三方模块 加载器
        rules : [ // 所有第三方模块的 匹配规则
            { test : /\.css$/, use : ['style-loader', 'css-loader'] },// 配置处理 css 文件的 第三方 loader 规则
            // 规则会 从右到左来调用
            // 处理 less 文件的第三方 loader 规则
            { test : /\.less$/, use : ['style-loader', 'css-loader', 'less-loader'] },
            // 处理 sass 文件的第三方 loader 规则
            { test : /\.scss$/, use : ['style-loader', 'css-loader', 'sass-loader'] }
        ] 
    }
}

// 当我们在控制台，直接输入 webpack 命令执行的时候，webpack 做了以下几步
/**
 * 1. 首先，webpack发现，我们并没有通过命令的形式，给它指定入口和出口；
 * 2. webpack 就会去项目的根目录中，查找一个叫做 webpack.config.js 的配置文件；
 * 3. 当找到配置文件后，webpack 会去解析执行这个配置文件，当解析执行完毕配置文件后，就得到了配置文件中，导出的配置对象；
 * 4. 当 webpack 拿到配置对象后，就拿到了配置对象中，指定的入口和出口，然后进行打包构建；
 **/ 