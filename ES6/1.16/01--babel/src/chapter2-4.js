// map set Object Array 之间的区别
{
    let array = []
    let obj = {}
    let set = new Set()
    let map = new Map()

    const goodItem = {fruit : 'apple'}
    
    // 增加
    array.push(goodItem)
    obj['fruit'] = 'apple'
    map.set('fruit', 'apple')
    set.add(goodItem)
    console.log('add', array, obj, map, set)

    // 查询
    const resultArray = array.includes(goodItem)
    const resultObj = 'fruit' in obj
    const resultMap = map.has('fruit')
    const resultSet = set.has(goodItem)
    console.log('search', resultArray, resultMap, resultObj, resultSet)

    // 修改
    array.forEach(function (item) {
        item.fruit = item.fruit ? 'orange' : ''
    })
    obj['fruit'] = 'orange'
    map.set('fruit', 'orange')
    set.forEach(function (item) {
        item.fruit = item.fruit ? 'orange' : ''
    })
    console.log('update', array, obj, map, set)

    // 删除
    const index = array.findIndex(function (item) {
        return item.fruit
    })
    array.splice(index, 1)
    delete obj.fruit
    map.delete('fruit')
    set.delete('fruit')
    console.log('delete', array, obj, map, set)
}

// 类型转换
{
    // map 和 Object 之间的转换
    let obj = {
        name : 'Nick',
        hobbies : 'swimming'
    }
    console.log(Object.entries(obj)) // 可以将 对象 转换为 map
    let map = new Map(Object.entries(obj))
    console.log('map', map)

    // 逆运算转换
    let obj2 = Object.fromEntries(map) // 可以将 map 转换为 对象
    console.log('obj', obj2)
}

{
    // 数组 和 set
    let array = [1, 2, 3, 4, 5]
    let set = new Set(array) // 将 数组 转化成 set
    console.log('set', set)
    let array2 = Array.from('hello') // 这个方法可以将一切传入的数据都转化成数组
    console.log('array', array2)

}