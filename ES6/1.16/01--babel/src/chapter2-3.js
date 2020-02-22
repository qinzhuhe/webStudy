{
    let set = new Set(['1', 2, 3, 4, 5])
    // 添加元素
    set.add(1)
    console.log(set)
    // 内部使用 Object.is() ，同值相等
    console.log('size', set.size) // 可以得出内部有多少个成员
}

// 设置属性
{
    // 判断属性 has
    // 删除属性 delete
    // 清空 clear
    let set = new Set()
    const item = { fruit: 'apple' }
    set.add(item)
    // console.log('has', set.has({ fruit : 'apple' })) // false 因为两个对象的存储地址不一样
    console.log('换种方式存储', set.has(item)) // true
}

// 遍历操作
{
    // keys()
    // values()
    // entries()
    // 注意：set 里面 key 和 values 的值是相等的，for of 默认遍历 values
    const set = new Set([1, 2, 3, 4, 5])
    for (const key of set.entries()) {
        console.log(key)
    }

}

// 最常用的使用场景是数组去重
{
    const array = [1, 2, 3, 4, 5, 6, 1, 2, 3]
    let uniqe = new Set(array)
    let uniqueArray = Array.from(uniqe)
    console.log(uniqueArray)
}

// WeakSet
{
    // WeakSet 和 Set 的区别
    /**
     * 1. 元素只能是对象，对象是弱引用的
     * 2. 无法遍历，没有 size ，没有clear
     */
    let Obj = {}
    let weakset = new WeakSet()
    weakset.add(Obj)
    console.log(weakset)
}