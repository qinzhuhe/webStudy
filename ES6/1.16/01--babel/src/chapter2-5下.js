/*
 * @Author: zy
 * @Date: 2020-01-20 14:50:28
 * @LastEditors  : zy
 * @LastEditTime : 2020-01-20 15:08:14
 * @Description: 
 */
{
    // 获取 DOM 元素
    const inputObj = document.getElementById('text')
    const textObj = document.getElementById('txt')

    // 初始化代理对象
    const obj = {}

    // 代理选项
    const handler = {
        get : function (target, key) {
            return Reflect.get(target, key)
        },
        set : function (target, key, value) {
            if (key === 'text') {
                inputObj.value = inputObj.value === value ? inputObj.value : value
                textObj.innerHTML = value
            }
            return Reflect.set(target, key, value)
        }
    }

    let objProxy = new Proxy(obj, handler)

    // 给 input 添加 键盘按下事件
    inputObj.addEventListener('keyup', function (e) {
        objProxy.text = e.target.value
        console.log(objProxy)
    })

    objProxy.text = ''
}