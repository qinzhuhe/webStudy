# `v-for`指令

### v-for 指令的四种用法

##### 1. 循环普通数组

`v-for="(item, i) in list"`

```html
<div id="app">
    <p v-for="(item, i) in list">索引值：{{ i }}---每一项：{{ item }}</p>
</div>
<script>
    var vm = new Vue({
        el : '#app',
        data : {
             list : [0, 1, 2, 3, 4, 5]
        }
    })
</script>
```



##### 2. 循环对象数组

`v-for="(user, i) in list"`

```html
<div id="app">
     <p v-for="(user, i) in list">Id：{{ user.id }} --- 名字：{{ user.name }} -- 索引：{{ i }}</p>
</div>
<script>
    var vm = new Vue({
         el : '#app',
         data : {
            list : [
                { id : 1, name : 'zhangsan' },
                { id : 2, name : 'lisi' },
                { id : 3, name : 'wangwu' },
            ]
         }
    })
</script>
```



##### 3. 循环对象

- 注意：在遍历对象身上的键值对是，除了 `val` 和  `key`  之外，还有第三个值 ：索引 -- `i`
- `v-for="(val, key) in user"`

```html
<div id="app">
     <p v-for="(val, key) in user">值：{{ val }} --- 键：{{ key }}</p>
</div>
<script>
     var vm = new Vue({
     	el : '#app',
     	data : {
           user : {
               id : 1,
               name : '霍元甲',
               gender : '男'
           }
        }
     })
        </script>
```



##### 4. 迭代数字

- `in` 后面可以放 普通数组，对象数组，对象，还可以放数字。
- 注意：如果使用 `v-for` 迭代数字的话，前面的 `count` 值从 1 开始。
- `v-for="count in 10"`

```html
<p v-for="count in 10">这是第 {{ count }} 次循环</p>
```



> 在组件中使用 `v-for` ，必须要使用 `key` 属性值

- 注意：`v-for` 循环的时候，`key` 属性只能使用 `number` 获取 `string`。 

- 注意：`key` 在使用的时候，必须使用 `v-bind` 属性绑定的形式，指定 `key` 的值。