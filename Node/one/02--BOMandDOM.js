// 在 Node 中，采用EcmaScript进行编码
// 没有 BOM、DOM
// 和浏览器中的 JavaScript 不一样
// console.log(window)

// console.log(document)

// =============================================================

// 浏览器中的 JavaScript 是没有文件操作的能力的
// 但是 Node 中的JavaScript 具有文件操作的能力

// fs 是 file-system 的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs 这个核心模块中，就提供了所有的文件操作相关的 API
// 例如： fs.readFile 就是用来读取文件的

// 1、使用 require 方法加载 fs 核心模块
var fs = require('fs')

// 读取文件方法：readFile
// 2、读取文件
// 	  第一个参数就是要读取的文件路径
// 	  第二个参数是一个回调函数
// 	  	成功
// 	  		data 数据
// 	  		error null
// 	  	失败
// 	  		data null
// 	  		error 错误对象
fs.readFile('data/a.txt',function (error, data){
// 	<Buffer 31 a1 a2 c8 b7 c8 cf b0 e6 b1 be a3 ba 0d 0a d4 da 63 6d 64 c3 fc c1 ee
// 		d0 d0 b9 a4 be df d6 d0 ca e4 c8 eb 6e 6f 64 65 20 2d 2d 76 65 72 73 69 6f 6e ..
// 		. 14 more bytes>
// 	文件中存储的其实都是二进制数据 0 1
// 	这里为什么看到的不是 0 和 1 呢？原因是二进制转为16进制了
// 	但是无论是二进制还是 16 进制，人类一般都无法识别
// 	所以我们可以通过 toString 方法把其转为我们能认识的字符
	
	// console.log(data);
	// console.log(data.toString());
	// 在这里通过error来判断文件是否错误
	if (error){
		console.log('读取文件失败了')
	}else {
		console.log('读取成功');
	}
	
})