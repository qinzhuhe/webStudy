// 为 项目入口文件

console.log('ok')

// 如何在 webpack 构建的项目中，使用 Vue 进行开发

// 安装 ： npm i vue -S

// 在 webpack 中尝试使用 Vue：
// 注意 ： 在 webpack 中，使用 import 导入的 Vue 构造函数功能是不完整的，它只提供了 runtime-only 的方式，并没有像 网页中那样的使用方式；
import Vue from 'vue'
// import Vue from './node_modules/vue/dist/vue.js'

// let login = {
//     template : '<h1>使用网页中形式创建出来的login组件</h1>'
// }

// 1. 导入 login 组件
import login from './src/login.vue'
// 默认 webpack 无法打包 .vue 文件，需要安装 相关的 loader
// npm i vue-loader vue-template-compiler -D
// 在配置文件中，新增 loader 配置项 ：{ test : /\.vue$/, use : 'vue-loader' }

const vm = new Vue({
    el : '#app',
    data : {
        msg : '123'
    },
    // components : {
    //     login
    // }
    // render : function (createElements) { // 在 webpack 中，如果想要通过 Vue，把一个组件放到页面中去展示，vm 实例中的 render 函数可以实现
    //     return createElements(login) 
    // }
    render : c => c(login) // 简写
})

import a1, { title, content } from './src/js/test.js'
console.log(a1)
console.log(title + '-----' + content)