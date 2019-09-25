# Node基础操作

### 1. 确认版本：

在cmd命令行工具中输入node --version进行版本号确认。

### 2.如何执行js文件：

shift+鼠标右键打开终端，定位到脚本文件所属目录。
输入 node 文件名 执行对应的文件。

> 注：文件名不要使用node.js这个后缀名，而除了这个名字命名随便取

> sublime辅助插件：terminal    作用：快捷打开文件路径

### 3. Node 中的编码方式

采用EcmaScript进行编码，没有 BOM、DOM，和浏览器中的 JavaScript 不一样。

### 4.Node文件操作

  - 浏览器中的 JavaScript 是没有文件操作的能力的。
  - 但是 Node 中的JavaScript 具有文件操作的能力。

### 5.特点

Node 为 JavaScript 提供了很多服务器级别的 API，这些 API 绝大多数都被包装到了一个具名的核心模块中。

> 例如操作文件系统的‘file system’，操作 http 服务器的 ‘http’。