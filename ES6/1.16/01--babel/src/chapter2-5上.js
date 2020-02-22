/*
 * @Author: zy
 * @Date: 2020-01-20 09:36:15
 * @LastEditors  : zy
 * @LastEditTime : 2020-01-20 12:35:25
 * @Description: 测试文件
 */

{
    // Proxy 代理的就是对象的一些操作
    let account = {
        id : 9923,
        name : 'admin',
        _private : 'test',
        phone : '1534546666',
        create_time : '2019'
    }

    let accountProxy = new Proxy(account, {
        /**
         * @description: 拦截读取和设置的操作
         * @param {target, key} 
         * target : 目标对象
         * key : 键名
         */
        get : function (target, key) {
            switch (key) {
                case 'phone':
                    return target[key].substring(0, 3) + '****' + target[key].substring(7)
                case 'create_time':
                    return target[key].replace('2019', 2020)
                default:
                    return target[key]
            }
        },
        // 设置
        set : function (target, key, value) {
            if (key === 'id') {
                return target[key]
            } else {
                return target[key] = value
            }
        },
        // 拦截 key in obj
        has : function (target, key) {
            if (key in target) {
                console.log(`${key} :`, target[key])
                return true
            } else {
                console.log('并无此属性')
                return false
            }
        },
        // 拦截 delete
        deleteProperty : function (target, key) {
            if (key.indexOf('_') === 0) {
                // console.warn() 在控制台输出警告信息
                console.warn('私有属性不能删除') 
                return false
            } else {
                delete target[key]
                return true
            }
        },

        // Object.keys()
        ownKeys (target) {
            return Object.keys(target).filter(function (item) {
                return item !== 'id' && item.indexOf('_') !== 0
            })
        }
    })

    accountProxy.id = 1234
    accountProxy.name = 'guest'

    // 输出
    // console.log('拦截读取', accountProxy.phone, accountProxy.create_time)
    // console.log('拦截设置', accountProxy.id + '---' + accountProxy.name)
    // console.log('===')
    // console.log('拦截 in', 'sex' in accountProxy)
    console.log('拦截删除', delete accountProxy['_private'])
    console.log('拦截 Object.keys()', Object.keys(accountProxy))
}

// Reflect
// 使用 Reflect 来操作对象
{
    let obj = {
        name : 'Nick',
        age : '32',
        sex : 'man',
        hobbies : 'swimming'
    }

    console.log(Reflect.get(obj, 'hobbies'))
    Reflect.set(obj, 'name', 'Jack')
    console.log(obj.name)
    'name' in obj
    Reflect.has(obj, 'name')
}