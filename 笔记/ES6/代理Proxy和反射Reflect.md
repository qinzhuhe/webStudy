# ES6中的代理和反射

### `Proxy`

正如 `Proxy` 的英译 "代理" 所示，`Proxy` 是 `ES6` 为了操作对象引入的 `API`，它不直接作用在对象上，而是作为一种媒介，如果需要操作对象的话，需要经过这个媒介的同意。 

- 使用

  ```javascript
  /**
  * @description: 代理
  * @param {Proxy} 
  * @return: target, handler
  * target : 用于 Proxy 包装的目标对象
  * handler : 一个对象，对代理对象进行拦截操作的函数，如 set, get
  */
  let p = new Proxy(target, handler)
  ```
  
- 常用方法

### `Reflect`
与 `Proxy` 相同，`ES6` 引入 `Reflect` 也是用来操作对象的，它将对象里一些明显属于语言内部的方法移植到 `Reflect` 对象上，它对某些方法的返回结果进行了修改，使其更合理，并且使用函数的方式实现了 `Object` 的命令式操作。
- 使用
```javascript

```