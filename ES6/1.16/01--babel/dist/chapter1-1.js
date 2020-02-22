"use strict";

// let a1 = Symbol('kk')
// let a2 = Symbol('kk')
// console.log(a1)
// console.log(a1 === a2)
// let a1 = Symbol.for('kk')
// let a2 = Symbol.for('kk')
// console.log(a1 === a2)
// let a1 = Symbol.for('kk')
// let obj = {
//     [a1] : 123,
//     kk : 123,
//     a1 : 123
// }
// let obj = {}
// obj[a1] = 3
// Object.defineProperty(obj, a1, {value : 123})
// console.log(obj)
var user = Symbol('Nick');
console.log(user);