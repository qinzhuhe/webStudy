/*
 * @Author: zy
 * @Date: 2020-01-20 15:10:35
 * @LastEditors  : zy
 * @LastEditTime : 2020-01-20 15:23:11
 * @Description: 
 */
{
    // es5 设置函数默认参数
    function es5Print (x, y) {
        y = y || 'world'
        console.log('es5', x + y)
    }
    es5Print('hello ', '')


    // es6 设置函数默认参数
    function es6Print (x, y = 'world') {
        console.log('es6', x + y)
    }
    es6Print('hello', '')
}

// rest
{
    function add (...rest) {
        let sum = 0
        for (let value of rest) {
            sum += value
        }
        console.log(sum)
    }
    add(1, 2, 3, 4, 5) 
}

{
    // 尾调用
    // 在函数的后面，返回的是另外一个函数，这种情况被称为 尾调用
    // 尾调用能够极大程度的节约性能
    function step2 (x) {
        console.log('尾调用', x)
    }
    function step1 (x) {
        return step2(x)
    }
}