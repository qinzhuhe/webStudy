// 路径形式的模块：
// ./ 当前目录，不可忽略
// ../ 上一级目录，不可忽略
// /xxx 几乎不用
// d:/a/foo.js 几乎不用
// 首位的 / 在这里表示的是当前文件模块所属磁盘根路径
// .js 后缀名可以忽略
// require('./foo.js')

// 核心模块的本质也是文件
// 核心模块文件已经被编译到了二进制文件中，我们直接按照名字加载即可
// require('fs')
// require('http')

// 第三方模块
// 凡是第三方模块都必须通过 npm 来下载
// 使用的时候就可以通过 require('包名') 的方式来进行加载才可以使用
// 不可能有任何一个第三方包和核心模块的名字是一样的
// 既不是核心模块，也不是路径形式的模块
// 		先找到当前文件所处目录中的 node_modules 目录
// 		node_modules/art-template
// 		node_modules/art-template/package.json 文件
// 		node_modules/art-template/package.json 文件 中的 main 属性
// 		main 属性中就记录了art-template 的入口模块
// 		然后加载使用这个第三方包
// 		实际上最终加载的还是文件

// 如果 package.json 不存在
// 或者 main 指定的入口模块是不存在的
// 则 node 会自动寻找该目录下的 index.js 文件进行加载
// 也就是说 index.js 回作为一个默认备选项

// 如果以上所有任何一个条件都不成立，则会进入上一级目录中的 node_module 目录查找
// 如果上一级仍没有找到，则继续往上上一级查找
// ...
// 如果直到查找当前磁盘根目录也未能查找到文件，最后报错

// 注意：在一个项目中有且只有一个 node_modules，放在项目根目录中，这样的话项目中所有的子目录中的代码都可以加载到第三方包
// 不会出现多个 node_modules
// 模块查找机制
// 		有限从缓存加载
// 		核心模块
// 		路径形式的文件模块
// 		第三方模块
// 			node_modules/art-template/package.json main属性

var template = require('art-template')

require('a')
