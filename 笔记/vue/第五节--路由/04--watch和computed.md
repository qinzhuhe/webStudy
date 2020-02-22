

# `Vue` 属性

###  1. watch

使用这个属性，可以监视 data 中指定数据的变化，然后触发这个 watch 中对应的 function 处理函数。

```javascript
const vm = new Vue({
            el: '#app',
            data: {
                firstname : '',
                lastname : '',
                fullname : ''
            },
            methods : {},
            watch : {
                'firstname' : function (newVal, oldVal) {
                    this.fullname = newVal + '-' + this.lastname
                },
                'lastname' : function (newVal, oldVal) {
                    this.fullname = this.firstname + '-' + newVal
                }
            }
        })
```



### 2. `computed`

在 `computed` 中，可以定义一些属性，这些属性，叫做 【`计算属性`】，这些 `计算属性` 本质就是第一个方法，只是我们在使用这些  `计算属性` 的时候，是把它们的名称，直接当做属性使用的，而不是把 `计算属性` 当做方法去调用。

```javascript
  const vm = new Vue({
            el: '#app',
            data: {
                midelname : '',
                firstname: '',
                lastname: ''
            },
            methods: {},
            computed : {
				'fullname' : function () {
                    return this.firstname + '-' + this.midelname + '-' + this.lastname
                }
            },
 })
```

- 注意1： 计算属性，在引用的时候，一定不要 加 () 去调用，直接把它当作属性去使用就好了；

- 注意2：只要 计算属性，这个 function 内部，所用到的任何 data 中的数据发生了变化，就会立即重新计算这个属性的值；
- 注意3：计算属性的求值结果，会被缓存起来，方便下次直接使用，如果计算属性中，所以来到的数据都没有发生过变化，则不会对 计算属性 重新求值。

### 3. 对比

1. `computed` 属性的结果会被缓存，除非以来的响应式属性变化才会重新计算，主要当作属性来使用；
2. `methods` 方法表示一个具体的操作，主要书写业务逻辑；
3. `watch` 是一个对象，键是需要观察的表达式，值是对应回调函数。主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作；可以看作是 `computed` 和 `methods` 的结合体