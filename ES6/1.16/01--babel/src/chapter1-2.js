// 数组解构
{
    let a, b
    [a, b] = [1, 2]
    console.log(a, b)
}

// 默认值
{
    let a, b, c
    [a, b, c = 6] = [1, 2, 3]
    console.log(a, b, c)
}

// 拓展运算符
{
    let a, other
    [a, ...other] = [1, 2, 3]
    console.log(a, other)
}

// 占位符
{
    let a, b
    [a, , b] = [1, 2, 3]
    console.log(a, b)
}

// 对象解构
{
    let a, b
    ({a, b} = {a:2, b:3})
    console.log(a, b)
}

// 自定义变量获取值
{
    let a, b
    ({ a: num, b: total } = { a: 2, b: 3 })
    console.log(num, total)
}

// 案例场景
{
    function fn() {
        return {
            name : 'Nick',
            nameList : [{
                name : 'KK'
            }]
        }
    }

    let b = fn()
    let {name : person, nameList : [{name : otherPerson}]} = b
    console.log(person, otherPerson) 
}