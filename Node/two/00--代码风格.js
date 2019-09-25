function say() {
	console.log('hello world')
}

say()

// 错误情况
// (function () {
// 	console.log('hello')
// })()

// 正确情况
;(function () {
	console.log('hello')
})()