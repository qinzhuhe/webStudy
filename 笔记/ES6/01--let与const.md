# 声明变量 LET 与 CONST 

### 1. let 声明变量

- 使用 let 声明的变量不存在预解析
- 使用 let 生命的变量不允许变量名重复（同一作用域内）

#### 1.1 块级作用域

ES6 中引入了块级作用域。

块级作用域的特征便是在外部无法访问内部。

在块级作用域内部，变量只能先声明再使用。

- 使用 if 声明块级作用域

  ```javascript
  if (true) {
  	// var flag = 123 // 123
  	let flag = 123 // flag is not defined
  }
  console.log(flag)
  ```

- {} 也能声明块级作用域

  ```javascript
  {
  	let flag = 111
  	console.log(flag) // 112
  }
  console.log(flag) // flag is not defined
  ```

- for 循环

  ```javascript
  for (let i = 1; i <= 3; i++) {
  	// for 循环括号中声明的变量只能在循环体中使用
  	console.log(i)
  }
  console.log(i) // i is not defined
  ```

- 在块级作用域内部，变量只能先声明再使用

  ```javascript
  if (true) {
  	console.log(flag) // Cannot access 'flag' before initializatio
  	let flag = 123
  }
  ```

### 2.const 声明常量
- const 用来声明常量

- const 定义的基本类型不能改变，但是定义的对象是可以通过修改对象属性等方法来进行改变的。

- const 声明的常量不允许重新赋值

  ```javascript
  const n = 1
  n = 2 // Cannot access 'flag' before initialization
  ```

- const 声明的常量必须初始化

  ```javascript
  const abc // Missing initializer in const declaration
  ```

  



