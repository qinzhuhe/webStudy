{
    // 扩展运算符的使用 ...
    
    // 复制数组的操作
    const list = [1, 2, 3, 4, 5]
    let list2 = [...list]
    console.log(list2)

    // 分割数组
    const totalList = [1, 'a', 'b', 'c']
    let [, ...strList] = totalList
    console.log(strList)

    // 给函数传递参数
    function add (x, y) {
        return x + y
    }

    let addList = [1, 2]
    console.log(add(...addList))

}

// fill
{ 
    // fill (替换内容, 从第几个下标开始, 到第几个位数结束--注意，是数字的位数，例如第一位第二位第三位，而不是下标)
    const list = [1, 2, 3, 4, 5]
    let list2 = [...list].fill(5)
    console.log(list2)
    let list3 = [...list].fill(3, 1, 4)
    console.log(list3)
}

// find findIndex
{
    // find 会返回搜索到的第一个值，就不会继续查找（在搜查时，更推荐实用唯一的标识符进行搜查，例如：id）
    const list = [{ title : 'es6' }, { title : 'webpack', id : 2 }, { title : 'vue' }, { title : 'webpack', id : 3 }]

    // find 会返回搜索到的第一个值，就不会继续查找（在搜查时，更推荐实用唯一的标识符进行搜查，例如：id）
    let result = list.find(function (item) {
        return item.title === 'webpack'
    })

    // findIndex 会返回对应的下标值
    let resultIndex = list.findIndex(function (item) {
        return item.title === 'webpack'
    })
    
    console.log(result , resultIndex)
}

 // includes 和 indexOf
{
   
    const list = [1, 2, 3, 4, 5, 6]
    let result = list.includes(2) 
    console.log('includes', result)
}

// flat 展开数组的操作
{
    
    const list = [1, 2, 3, ['2nd', 4, 5, 6, ['3rd', 7, 8, 9]]]
    let flatList = [].concat(...list)
    console.log(flatList) 

    // flat 中不传值则是会默认只展开第一层数组
    let flatList2 = list.flat(2)
    console.log('flat', flatList2)
}