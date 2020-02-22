"use strict";

/*
 * @Author: zy
 * @Date: 2020-01-20 15:47:19
 * @LastEditors  : zy
 * @LastEditTime : 2020-01-20 16:15:43
 * @Description: 
 */
{
  // 如果在函数创建时 创建参数进行声明后，又在函数内部使用 let 进行声明，则会报错
  // function fn (x) {
  //     let x
  // }
  // 箭头函数声明 1
  var arrow = function arrow(x) {
    console.log('箭头函数');
  };

  arrow();
} // 箭头函数声明 2

{
  var _arrow = function _arrow(x) {
    return x * 2;
  }; // 如果不加 {} , 则程序会将此结果默认返回给 arrow


  var result = _arrow(10);

  console.log(result);
} // 

{
  var fruit = {
    name: 'apple',
    price: 18,
    num: 3,
    sum: function sum() {
      var _this = this;

      setTimeout(function () {
        console.log(_this.num * _this.price);
      }, 1000);
    }
  };
  fruit.sum(); // 箭头函数默认指向的就是对象实例
} // 在 javascript 中什么时候使用箭头函数

/**
 * Object.method() 就用普通函数进行申明，其他情况下都用箭头函数
 * 
 */