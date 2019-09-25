# 认知Node.js

### Node.js是什么

- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine
  - Node.js 不是一门语言
  - Node.js 不是库、不是框架
  - Node.js 是一个 JavaScript  运行时环境
  - 简单来讲就是 Node.js 可以解析和执行 JavaScript  代码
  - 以前只有浏览器可以解析和执行 JavaScript 代码
  - 也就是说现在的 javascript 可以完全脱离浏览器来运行，而这都归功于：Node.js



- 构建于 Chrome 的 V8 引擎之上

  - 代码只是具有特定格式的字符串而已
  - 引擎可以认识他，引擎可以帮你去解析和执行
  - Google Chrome 的 V8 引擎是目前公认的解析执行 JavaScript 代码最快的
  - Node.js 的作者把 Google Chrome 中的 V8 引擎移植了出来，开发了一个独立的 JavaScript 运行时环境 

  

- 浏览器中 JavaScript

  - EcmaScript
    - 基本的语法
    - if
    - var 
    - function
    - Object
    - Array
  - BOM
  - DOM

  

- Node.js 中的 JavaScript

  - **没有 BOM、DOM**

  - EcmaScript

  - 在 Node 这个JavaScript 执行环境中为 JavaScript 提供了一些服务器级别的操作API

    - 例如文件读写
    - 网络服务的构建
    - 网络通信
    - http服务器
    - 等处理。。。

    

- Node.js 所具有的

  - event-driven  事件驱动
  - non-blocking I/O model  非阻塞 IO 模型（异步）
  - lightweight and efficient  轻量和高效

  

- npm 是世界上最大的开源库生态系统

  - 绝大多数 JavaScript 相关的包都存放在了 npm 上，这样做的目的是为了让开发人员更方便的去下载使用
  - 例如：`npm install jQuery`



### Node.js 能做什么

- web 服务器后台
- 命令行工具
  - npm(node)
  - git(c 语言)
  - hexo(node)
  - 。。。
- 接口服务器
- 对于前端开发工程师来讲，接触 node 最多的是它的命令行工具
  - 自己写的很少，主要是使用别人第三方的
  - webpack
  - gulb
  - npm