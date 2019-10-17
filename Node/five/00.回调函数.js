// console.log(1)

// setTimeout(function () {
// 	console.log(2)
// 	console.log('hello')
// }, 1000)

// console.log(3)


// function add (x, y) {
// 	var ret 
// 	console.log(1)
// 	setTimeout(function (){
// 		console.log(2)
// 		ret = x + y
// 	}, 1000)
// 	console.log(3)
// 	return ret
// }

// console.log(add(10, 20))


// 第二种 ==========================

// var ret

// function add (x, y) {
// 	console.log(1)
// 	setTimeout(function () {
// 		console.log(2)
// 		ret = x + y
// 	}, 1000)
// }

// add(10, 20)

// setTimeout(function () {
// 	console.log(ret)
// }, 2000)

// 第三种 =========================

function add (x, y, callback) {
	console.log(1)
	setTimeout(function () {
		var ret = x + y
		callback(ret)
	}, 1000)
}

add(10, 20, function (ret) {
	console.log(ret)
})