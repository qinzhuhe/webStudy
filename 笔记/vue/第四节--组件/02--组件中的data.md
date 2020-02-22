# 组件中的data

- 组件可以有自己的 `data`  数据

- 组件的 data 和实例的 data 有点不一样，实例中的 data 可以为一个对象，但是组件中的 data 必须是一个方法

- 组件中的 data 除了必须为一个方法之外，这个方法内部，还必须返回一个对象才行
- 组件中的 data 数据使用方式，和实例中的 data 使用方式完全一样

```javascript
Vue.component('mycom1', {
            template : '<h1>这是全局组件 --- {{ msg }}</h1>',
            data : function () {
                return {
                    msg : '这是组件中的 data 数据'
                }
            }
        })
```

