// map
{
    // map 数据映射
    const json = [{ title : 'es6', status : 1 }, { title : 'react', status : 0 }, { title : 'webpack', status : 1 }, { title : 'babel', status : 0 }]
    let video = json.map(function (item) {
        // return {
        //     name : item.title,
        //     statusTxt : item.status ? '已上线' : '未上线'
        // }
        let obj = {}
        Object.assign(obj, item)
        obj.status = item.status ? '已上线' : '未上线'
        return obj
    })
    console.log('json', json)
    console.log('video', video)
}

// reduce
{
    /**
     * reduce 对数组中的每个元素都进行一次回调，升序执行然后将会调值汇总成一个返回值
     * @params cb(acc, currentValue, currentIndex, Array), initalValue
     */
    const letterList = 'abcdefg'
    const result = letterList.split('').reduce(function (acc, cur) {
        acc[cur] ? acc[cur]++ : acc[cur] = 1
        return acc
    }, {})
    console.log(result)

    // 展开多层数组
    const list = [1, ['2nd', 2, 3, ['3rd', 4, 5]], ['2nd', 6, 7]]
    const deepFlat = function (list) {
        return list.reduce(function (acc, cur) {
            return acc.concat(Array.isArray(cur) ? deepFlat(cur) : cur)
        }, [])
    }
    let flatList = deepFlat(list)
    console.log('reduce-flat', flatList)
}