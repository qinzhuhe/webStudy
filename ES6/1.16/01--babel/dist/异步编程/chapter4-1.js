"use strict";

/*
 * @Author: zy
 * @Date: 2020-01-23 21:28:37
 * @LastEditors  : zy
 * @LastEditTime : 2020-01-23 22:49:29
 * @Description: promise
 */
{
  // 回调地狱
  var ajax = function ajax(cb) {
    setTimeout(function () {
      cb && cb(function () {
        console.log('任务2');
      });
    }, 1000);
  }; // ajax((cb2) => {
  //     console.log('任务1')
  //     setTimeout(() => {
  //         cb2 && cb2()
  //     }, 1000);
  // })

}
{
  // promise 改造回调函数
  var _ajax = function _ajax() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  }; // ajax().then(() => {
  //     console.log('任务1')
  // })

}
{
  var _ajax2 = function _ajax2() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 1000);
    });
  }; // ajax().then(() => {
  //     console.log('任务1')
  //     return new Promise(resolve => {
  //         setTimeout(() => {
  //             resolve()
  //         }, 1000);
  //     })
  // }).then(() => {
  //     console.log('任务2')
  // })

}
{
  // 使用 catch 方法捕捉错误
  var judgeNumber = function judgeNumber(num) {
    return new Promise(function (resolve, reject) {
      if (typeof num === 'number') {
        resolve(num);
      } else {
        var err = new Error('请输入数字');
        reject(err);
      }
    });
  }; // judgeNumber('2')
  //     .then(num => console.log(num))
  //     .catch(err => console.log(err)) // 在 promise 执行中捕捉异常的方法

}
{
  var getImage = function getImage(url) {
    return new Promise(function (resolve, reject) {
      var img = document.createElement('img');
      img.src = url;

      img.onload = function () {
        return resolve(img);
      };

      img.onerror = function (err) {
        return reject(err);
      };
    });
  };

  var showImage = function showImage(imgs) {
    imgs.forEach(function (item) {
      document.body.appendChild(item);
    });
  };

  var showFirstImage = function showFirstImage(img) {
    document.body.createElement(img);
  }; // Promise.all([getImage(imgUrl1), getImage(imgUrl2), getImage(imgUrl3)]).then(showImage)
  // Promise.race 用于希望多个 Promise 函数中只要一个执行成功就实现代码，这种场景使用


  // Promise.all
  var imgUrl1 = './img/f3.png';
  var imgUrl2 = './img/f4.jpg';
  var imgUrl3 = './img/fate1.png';
  Promise.race([getImage(imgUrl1), getImage(imgUrl2), getImage(imgUrl3)]).then(showFirstImage);
}