// console.log(flag)

// var flag = 123

// let flag = 123 // Cannot access 'flag' before initialization

// let flag = 456 // Identifier 'flag' has already been declared


// ES6 中引入了块级作用域
// 块级作用域定义的变量，在外部是无法访问的

// --------------------------------------------------------------
// 1. 使用 if 声明块级作用域
// if (true) {
// 	// var flag = 123 // 123
// 	let flag = 123 // flag is not defined
// }
// console.log(flag)

// --------------------------------------------------------------
// 2. {} 也能声明块级作用域
// {
// 	let flag = 111
// 	console.log(flag) // 112
// }
// console.log(flag) // flag is not defined

// --------------------------------------------------------------
// 3. for 循环使用
// for (let i = 1; i <= 3; i++) {
// 	// for 循环括号中声明的变量只能在循环体中使用
// 	console.log(i)
// }
// console.log(i) // i is not defined

// --------------------------------------------------------------
// 4. 在块级作用域内部，变量只能先声明再使用
// if (true) {
// 	console.log(flag) // Cannot access 'flag' before initializatio
// 	let flag = 123
// }

// ==============================================================
// const 用来声明常量
// const 声明的常量不允许重新赋值
// const n = 1
// n = 2 // Cannot access 'flag' before initialization

// const 声明的常量必须初始化
const abc // Missing initializer in const declaration
