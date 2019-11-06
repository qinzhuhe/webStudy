/**
 * 函数扩展
 * 1. 参数默认值
 * 2. 参数解构赋值
 * 3. rest参数
 * 4. ...扩展运算符
 */

// 默认值
// function foo (param) {
// 	let p = param || 'hello'
// 	console.log(p)
// }
// // foo() // hello
// foo('hi') // hi

// ---------------------------------------
// 默认值 ES6 设置
// function foo (param = 'hi') {
// 	console.log(param)
// }
// foo(); // hi
// foo('hello') // hello

// ---------------------------------------
// 参数解构赋值
// function foo ({username = '李四', age = 14} = {}) {
// 	console.log(username, age)
// }

// foo({username : '张三', age : 13})

// ---------------------------------------
// rest 参数 (剩余参数)
// 将多个参数合并成数组
// function foo (a, b, ...param) {
// 	console.log(a)
// 	console.log(b)
// 	console.log(param)
// }
// foo (1, 2, 3, 4, 5)

// ---------------------------------------
// 扩展运算符...
// 将数组拆散成单个参数
// function foo (a, b, c, d, e) {
// 	console.log(a + b + c + d + e)
// }
// let arr = [1, 2, 3, 4, 5, 6, 7]
// foo(...arr)

// 合并数组
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arr3 = [...arr1, ...arr2]
console.log(arr3)
