# Symbol

`ES6` 之前 `javascript` 一共有着六种数据类型，但是其中，对象的属性名容易产生命名冲突，为了保证键名的唯一性，故 `es6` 引入 `Symbol` 这种新的原始数据类型，确保创建的每个变量都是独一无二的。

### 特点

- `Symbol` 类型的数据是类似字符串的数据类型，由于 `Symbol` 函数返回的值是原始类型的数据，不是对象，故 `Symbol` 函数前不能使用 `new` 命令，否则会报错。

- 可选参数。由于控制台输出不同的 `Symbol ` 变量时都是 `Symbol()`，故为了区分，可在创建 `Symbol` 变量时传入参数进行区分，如：

  ```javascript
  // 这里的 a1, a2 的作用可以说是为了备注，以至于我们输出 Symbol 变量时能够区分不同的变量。
  let a1 = Symbol('a1')
  let a2 = Symbol('a2')
  ```

  

 