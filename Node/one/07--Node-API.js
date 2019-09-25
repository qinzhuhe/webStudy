// 用来获取机器信息的
var os = require('os')

// 用来获取操作路径的
var path = require('path')

// 获取当前机器的 CPU 信息
console.log(os.cpus())

// memory 内存
console.log(os.totalmem())

// extname extension name
console.log(path.extname('c:/a/b/c/d/hello.txt'))