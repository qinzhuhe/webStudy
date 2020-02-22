"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 * @Author: zy
 * @Date: 2020-01-20 16:53:05
 * @LastEditors  : zy
 * @LastEditTime : 2020-01-20 17:13:47
 * @Description: 模块化开发 export 导出
 */
// export let a = 3
// export function sayHello () {
//     console.log('hello world')
// }
// export class test {
//     say () {
//         console.log('test')
//     }
// }
// 先声明后导出
var a = 3;

function sayHello() {
  console.log('hello');
}

var _default = {
  a: a,
  sayHello: sayHello
};
exports["default"] = _default;