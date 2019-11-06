/**
 * 箭头函数
 * 箭头函数的注意事项:
 */

// =============================================
// let foo = () => console.log('hello')
// foo()

// =============================================
// function foo (v) {
// 	return v
// }

// let foo = v => v
// let ret = foo(111)
// console.log(ret)

// =============================================
// 多个参数必须用小括号包住
// let foo = (a, b) => {let c = 1; console.log(a + b + c)}
// foo(1, 2) // 4

// =============================================
// let arr = [123, 465, 789]
// arr.forEach(function (element, index) {
// 	console.log(element, index)
// })
// arr.forEach((element, index) => {
// 	console.log(element, index)
// })

// =============================================
// 1. 箭头函数中 this 取决于函数的定义, 而不是调用
// function foo () {
// 	// 使用 call 调用 foo 时,这里的 this其实就是 call 的第一个参数
// 	setTimeout(() => {
// 		console.log(this.num)
// 	}, 100)
// }
// foo.call({num : 1})

// -----------------------------------------
// 2. 箭头函数不可以 new
// let foo = () => {this.num = 123}
// new foo() // foo is not a constructor

// -----------------------------------------
// 3. 箭头函数不可以使用 arguments 获取参数列表,可以使用 rest 参数代替
// let foo = (a, b) => {
// 	// console.log(a, b)
// 	console.log(arguments)
// }
// foo(123, 456)

let foo = (...param) => {
	console.log(param)
}
foo(123, 456)
