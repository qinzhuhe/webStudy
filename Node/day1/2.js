// 写文件

var fs = require('fs')

// 第一个参数写入的文件路径，第二个为写入的文件内容,第三个参数还是回调函数
// 回调函数中含有参数--形参error
// 成功：
// 		文件写入成功
// 		error 是 null
// 失败
// 		文件写入失败
// 		error 就是错误对象
fs.writeFile('./data/hello.txt','光明于我同在！！！',function(error){
	console.log('文件写入成功')

})