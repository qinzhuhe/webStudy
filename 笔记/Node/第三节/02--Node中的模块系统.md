# Node 中的模块系统

### Node编写程序的使用

+ EcmaScript
	
	- 和浏览器不一样，在 Node 中没有 BOM、DOM
	
+ 核心模块
	- fs => 文件操作模块
	- http => 服务的 http模块
	- url=> 路径操作模块
	- path => 路径处理模块
	- os => 操作系统信息

+ 第三方模块
	- art-template
	- 必须通过 npm 来下载才可以使用

+ 自己创建的模块
	
	- 自己创建的文件
	
	

### 什么是模块化

如果一个平台具有：

+ 文件作用域
+ 通信规则
	- 加载 require
	- 导出 

那么这一个平台便可以被称作模块化。



### CommonJS 模块规范
在 Node 中的 JavaScript 还有一个很重要的概念：模块系统。

+ 模块作用域
+ 使用 require 方法用来加载模块
+ 使用 exports 借口对象用来导出模块中的成员