// 对象中扩展运算符的使用
{
    // 复制对象
    const obj = { name : 'Nick', video : 'es6' }
    let videoObj = { ...obj }
    console.log(videoObj)

    // 设置对象默认值
    let obj2 = {...obj, name : 'Jack'}
    console.log(obj2)

    // 合并对象
    const initObj = { color : 'red' }
    let obj3 = { ...obj, ...initObj }
    console.log(obj3)

    // 坑点
    // 简单类型的时候，使用扩展运算符是没有问题的，但是如果扩展运算符展开对象以后，还是一个对象的话，我们复制的只是一个指针而已
}

// es6 对象缩略
{
    let name = '小明'
    let age = 18

    let es5Obj = {
        name : name,
        age : age,
        sayHello : function () {
            console.log('this is ES5Obj')
        }
    }

    let es6Obj = {
        name,
        age,
        sayHello () {
            console.log('this is ES6Obj')
        }
    }

    console.log('es5', es5Obj)
    console.log('es6', es6Obj)

    es5Obj.sayHello()
    es6Obj.sayHello()
}

// ES6 可计算的属性名
{
    let key = 'name'
    let es5Obj = {}
    es5Obj[key] = '小明'

    let es6Obj = {
        [key] : '小红'
    }

    console.log(es5Obj, es6Obj)
}

// 新增方法
{
    // Object.is() 和 '==='
    // 判断值是否相等，同类型同值相等就返回 true ，否则 false
    let result = Object.is(NaN, NaN)
    console.log(result, NaN === NaN)

    // Object.assign()
    // 赋值对象，第一个参数为目标对象，即为传值对象，第二个参数为来源对象，如果这个值只是一个对象的话，它只是复制值的指针，为浅拷贝
    const person = { name : '小米', age : 17, info : { height : 180 } }
    let person2 = {}
    Object.assign(person2, person)
    person.info.height = 160
    console.log(person2)
}

// Array.from
{
    // Array.from 转换类数组对象
    // 它可以将一个类数组对象转化成一个数组
    // 如何判断一个类数组对象，有length，且能进行遍历
    const str ='hello'
    const strList = Array.from(str)
    console.log(strList)
}

// 对象提供的新方法
{
    // Object.keys() 
    // 遍历对象 所有的属性名
    const json = { name : 'Nick', video : 'es6', date : 2019 }
    let obj = {}
    for (const key of Object.keys(json)) {
        obj[key] = json[key]
    }
    console.log(obj)

    // Object.values()
    // 遍历对象 所有的属性值

    // Object.entries()
    // 遍历对象 所有的键值对
}