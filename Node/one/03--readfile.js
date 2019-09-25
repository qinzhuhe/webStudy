var fs = require('fs')

// 写入文件方法：writeFile('',txt,fn);
// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
// 		error
// 		
// 		成功：
// 			文件写入成功
// 			error 是 null
// 		失败
// 			文件写入失败
// 			error 就是错误对象
fs.writeFile('./data/初试><.txt', '此次是使用Node中的方法进行文件创建的测试', function (error){
	if (error){
		console.log('写入失败')
	}else {
		console.log('写入成功')
	}
})