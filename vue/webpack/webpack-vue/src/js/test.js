// 这是 Node 向外暴露成员的形式
// module.exports = {}

// 在 ES6 中，也通过规范的形式，规定了 ES6 中如何 导入 和 导出 模块
//      ES6 中导入模块，使用 import 模块的名称 from '模块标识符' import '表示路径'

// 在 ES6 中，使用 export default 和 export 向外暴露成员：

let info = {
    name: 'zs',
    age: 20
}

export default info

export let title = '小星星'

export let content = '伍六七'

// export default {
//     address : '测试'
// }


// 注意：export default 暴露的成员，可以用任意名字来接受；
// 注意：在一个模块中，export default 只允许向外暴露一次；
// 注意：在一个模块中，允许同时使用 export default 和 export 向外暴露成员；

// 注意：使用 export 向外暴露的成员，只能使用 {} 的形式来接收，这种形式，叫做按需导出；
// 注意：export 可以向外暴露多个成员，同时，如果某些成员，我们在 import的时候，不需要，则可以不在 {} 中定义；
// 注意：使用 export 导出的成员，必须严格按照导出的名字，来使用 {} 按需接收；
// 注意：使用 export 导出的成员，如果就想换个名称来接收，可以使用 as 来起别名；



// 在 Node 中使用 var 名称 = require('模块标识符')
// module.exports 和 exports 暴露成员