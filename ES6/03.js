/**
 * 字符串相关拓展
 * includes()  判断字符串中是否包含指定的子串(有则返回true, 否则返回false)
 * 				参数一: 匹配的字符串; 参数二: 从第几个开始匹配
 * startsWith()  判断字符串是否以指定的字串开始(有则true, 否则false)
 * endsWith()  判断字符串是否以指定的字串结束(有则true, 否则false)
 *
 * 模板字符串 ``
 *
 */

// includes()
// console.log('hello world'.includes('hello', 0))

// startsWith()
// let url = 'admin/index.js'
// console.log(url.startsWith('aadmin'))

// endsWith()
// let url = 'admin/index.js'
// console.log(url.endsWith('index'))

// ``
// 反引号表示模板,模板中的内容可以有格式,通过${}方式填充数据
let obj = {
	name : '小明',
	age : '12',
	sex : '男'
}

let fn = function (info) {
	return info
}

let tpl = `
<div>
	<span>${obj.name}</span>
	<span>${obj.age}</span>
	<span>${obj.sex}</span>
	<span>${1+1}</span>
	<span>${fn('你好')}</span>
</div>
`
console.log(tpl)
