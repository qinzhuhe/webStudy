/*
	变量的解构赋值
 */
// 原来的赋值方法
// var a = 1
// var b = 2
// var c = 3

// 数组的解构赋值
// var [a, b, c] = [1, 2, 3]
// console.log(a, b, c) // 1, 2, 3

// let [a, b, c] = [1, 2, 3]

// let [a, b, c] = [, 123, ]
// console.log(a, b, c) // undefined 123 undefined

// 对象的解构赋值
// let {foo, bar} = {'foo' : 'hello', 'bar' : 'hi'} // 赋值时的前后顺序不会影响
// console.log(foo, bar)

// 对象属性别名(如果有了别名,那么属性原来的名字就无效了)
// let {foo:abc, bar} = {'foo' : 'good job', 'bar' : 'hi'}
// console.log(abc, bar)
// console.log(foo, bar) // foo is not defined

// 对象的解构赋值  指定默认值
// let {foo : abc = 'world', bar} = {'bar' : 'hello'} // 没有赋值则使用默认值
// console.log(bar, abc)

// ============================================================================
// 字符串的结构赋值
let [a, b, c, d, e] = "hello"
console.log(a, b, c, d, e)

// 使用对象的方式获取字符串长度
let {length} = 'hello'
console.log(length)
