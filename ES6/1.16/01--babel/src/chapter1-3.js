// ES5
{
    const str1 = 'a'
    const str2 = '\u20bb7'
    console.log(str1)
}

// ES6
{
    const str3 = '\u{20bb7}'
    console.log('str3', str3)
}

// for of
{
    const str3 = '\u{20bb7}'
    
    for (let i = 0; i < str3.length; i++) {
        console.log('for', str3[i])
    }

    for (let word of str3) {
        console.log('for-of', word)
    }
}

// 判断字符串中是否包含指定字符串的几个方法
{
    let str = '123Nick321'

    console.log('include', str.includes('N', 0))
    console.log('starsWith', str.startsWith('Nick', 3))
    console.log('endsWidth', str.endsWith('k', 7))

}

// 重复字符串
{
    let str = 'Nick123'
    str = str.repeat(3)
    console.log('repeat', str)
}

// 头部补全
{
    let str = 'Apple'
    str = str.padStart(8, 'asdsd')
    console.log('padstart', str)
}

// 尾部补全
{
    let str = 'Apple'
    str = str.padEnd(8, 'aabbv')
    console.log('padEnd', str)
}

// 模板字符串
{
    // 老版
    // const name = 'nick'
    // const age = 18
    // const str = '我叫' + name + ', 我今年' + age
    // console.log(str)

    // 模板字符串
    const name = 'nick'
    const age = 18
    const str = `我叫${name}, 我今年${age}`
    console.log('es6-str', str)
}