// 入口文件配置
// 导入 path 路径操作模块
const path = require('path')

// 导入 html 模板生成插件
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry : path.join(__dirname, './main.js'),
    output : {
        path : path.join(__dirname, './dist'),
        filename : 'bundle.js'
    },
    plugins : [
        new htmlWebpackPlugin ({
            template : path.join(__dirname, './src/index.html'),
            filename : 'index.html'
        })
    ],
    module : {
        rules : [
            {
                test : /\.css$/,
                use : [ 'style-loader', 'css-loader' ]
            },
            {
                test : /\.less$/,
                use : [ 'style-loader', 'css-loader', 'less-loader' ]
            },
            {
                test : /\.sass$/,
                use : [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test : /\.(png|jpg|svg|gif|jpeg|ico|woff|woff2|eot)/,
                use : 'url-loader?limit=100&name=[hash:8]-[name].[ext]'
            },
            {
                test: /\.(ttf|eot|svg|woff|woff2|otf)$/,
                use: 'url-loader' 
            },
            {
                test : /\.js$/,
                use : 'babel-loader',
                exclude : /node_modules/
            }
        ]
    }
}
