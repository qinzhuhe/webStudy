// 添加元素
{
    let map = new Map()
    map.set([1, 2, 3], 'number') // 添加元素
    console.log(map)

    let map2 = new Map([['name', 'Nick'], ['sex', 'male']]) // 添加元素
    console.log(map2)
    console.log(map2.size) // 返回键值对数量

    map2.set('name', 'Jack').set('hobbies', ['swimming', 'running'])
    console.log('set', map2) // 使用 set 方法添加时，后面的会覆盖前面的内容

    // 读取其中的键值对 -- get
    console.log('get', map2.get('hobbies'))
    console.log('get2', map.get('age')) // 读取不存在的属性名时则会返回 undefined
    
    // 判断属性是否存在 -- has
    console.log('has', map.has('age'))

    // 删除其中的属性
    map2.delete('hobbies')
    console.log('delete', map2)

    // 清空其中的属性
    map2.clear()
    console.log('clear', map2)
}

// 遍历器生成函数
{
    // keys() 属性名
    // values() 属性值 
    // entries() 键值对
    // 遍历方法 forEach
    const map = new Map([
        ['name', '小明'],
        ['age', 20]
    ])
    // for of 循环默认遍历 entries
    for (const key of map) {
        console.log(key)
    }
}

// WeakMap
/** 与 map 的差别
* 1. 只接受对象作为一个键名，不接受其他类型的数据作为键名
* 2. 因为键名所指的对象不触发垃圾回收机制
* 3. 没有 clear, 没有 size, 无法遍历
*/
{
    let weakmap = new WeakMap ([
        [{'name' : 'haha'}, 'jack']
    ])
    console.log(weakmap) // 报错

    const ulObj = document.getElementById('test')
}