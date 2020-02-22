/*
 * @Author: zy
 * @Date: 2020-01-20 16:17:29
 * @LastEditors  : zy
 * @LastEditTime : 2020-01-20 16:52:41
 * @Description: 
 */
{
    // ES5 的时候是通过构造函数来实现类的功能的
    function Person (name, age) {
        this.name = name
        this.age = age
    }
    Person.prototype.sayHello = function () {
        console.log(`我的名字叫做${this.name}, 我今年${this.age}岁了`)
    }
    const p = new Person('小明', 22)
    console.log(p)
}

// ES6 实现类
{
    class Person {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        sayHello () {
            console.log(`名字是${this.name}, 今年${this.age}岁了`)
        }
    }
    const p = new Person('小明', 20)
    console.log('class', p)
    console.log(typeof Person) // 类本质就是一个函数，ES6 中可以将类看做构造函数的语法糖

}

// 类的继承
{
    class Parent {
        constructor (name = 'Nick') {
            this.name = name
        }
    }
    // extends 继承父类
    class Child extends Parent {
        constructor (name = 'Joy') {
            // 使用 spuer() 声明子类对父类属性进行覆写
            super(name)
            this.name = name
        }
    }
    console.log('继承', new Child)
}

{
    class Person {
        constructor (name = 'Hand') {
            this.name = name
        }
        // 有 get 和 set 两种方法
        // get 和 set 不是函数，而是其中的两个属性
        get fullName () {
            return this.name + '\xa0' + 'Liu'
        }
        set fullName (value) {
            this.name = name
        }
    }
    const p = new Person()
    console.log('get', p.fullName)
    p.fullName = 'ros'
    console.log('set', p.fullName)
}

// 静态方法 
{
    class Person {
        constructor(name = 'Hand') {
            this.name = name
        }
        static sayHello (obj) {
            console.log('my name is ' + obj.name)
        }
    }
    const p = new Person('小华')
    Person.sayHello(p)
    console.log(p)
}

// 静态属性
{
    class Person {
        // static prop = 'test' // es7 声明
        constructor(name = 'Hand') {
            this.name = name
        }
    }
    Person.prop = 'test' // ES6 声明静态属性
    console.log(Person.prop)
    
}