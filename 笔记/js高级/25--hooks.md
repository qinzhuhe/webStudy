# Hooks & Vue

`Hook`，通常用于指系统运行到某一时期时，会调用被注册到该时机的回调函数，故此也被称为**钩子函数**。

而在前端中，由于场景以及业务功能的不同，`Hooks` 用于提供在函数式中完成生命周期、状态管理、逻辑复用等几乎全部组件开发工作的能力。也就说，**`Hooks` 就是用于提供开发者在函数式组件中完成全部开发工作的工具**。

而在 `vue` 与 `react` 中，对于 `Hooks` 的用法也不尽相同：

- `vue`：只能在 **`setup`** 周期内使用 `Hooks`
- `react`：只能在**函数组件**内使用 `Hooks`

## `Hooks` 出现的原因

`Hooks` 的出现，某种程度上来说就为了更好的替代 `Class Component`  。在常规的 `class` 组件模式中，状态逻辑的复用是一件困难的事。

> 例如，假设在多个业务组件中有一个通用的属性值 `name`，为了实现该属性值的复用，除了本身要对该属性值进行申明和初始赋值之外，还需要创建一个 `setName` 方法，用于对该值进行状态修改

### `Mixins`

根据以上需求，假设使用 **`mixins`** 进行解决：

```js
// 用于混入的文件 name-mixin.js
export default {
    data() {
        return {
            name: 'name'
        }
    },
    methods: {
        setName(name) {
            this.name = name
        }
    }
}
```

```vue
// 组件 my-component.vue
<template>
...
</template>
<script>
    import nameMaixin from './name-mixin.js'
    export default {
        // 通过 mixins ，可以直接获取该 mixin 中定义的所有状态、方法、生命周期中的事件等
        mixins: [nameMaixin],
        mounted() {
            console.log(this.name)
        }
    }
</script>
```

但是，`mixins` 虽然提供了状态复用的能力，但使用的过程中却有着难以解决的弊端：

1. **难以对属性和方法进行追溯**

   假设在一个组件中同时引入了多个 `mixin`，并且使用了其中一个 `mixin` 中的属性 / 方法。

```js
export default {
  mixins: [ a, b, c, d, e, f, g ], // 当然，这只是表示它混入了很多能力
  mounted() {
    // 难以追溯 name 到底是从哪个 mixin 中实现的
    console.log(this.name)
    
  }
}
```
2. **属性/方法名的覆盖**

   在引入的 `mixin` 文件中，极有可能会出现多个 `mixin` 各自在它们的内部声明了一个同名的属性，例如 [`name`]。

3. **难以对代码进行重复**

   仍然说上面的例子，如果我的需求发生了改变，我需要的不再是一个简单的状态 `name`，而是分别需要 `firstName` 和 `lastName`。
   此时 `name-mixin.js` 混入的能力就会非常尴尬，因为我无法两次 `mixins` 同一个文件。

   而如果使用动态生成 `mixin` 的方式，无疑会大幅度增加代码的复杂度，让人的阅读成本再次增加。

### Hooks

而基于以上原因，作为一种欠缺的**状态逻辑复用**方法，`Hooks` 应运而生。

简单列举一下 `Hook` 的状态复用写法：

```js
// 单个 name
const {name, setName} = useName()

// 多个类型
const {name: firstName, setName: setFirstName} = useName()
const {name: secondName, setName: setSecondName} = useName()
```

相比于 `mixins`，`Hooks` 顺利将以上三个弊端解决，不仅如此，在 `Hooks` 中，有关于 `this`  的混乱指向也得以解决。得益于纯函数式的构成，`Hooks` 告别了 `Class` 类组件带来的困扰。

#### `React` 中的 `Hooks`

因为 `react Hooks` 仅支持函数式组件，所以在 `react` 中使用 `Hooks`，需要先创建一个函数式组件：

```react
// my-components.js
import { useState, useEffect } from 'React'

export default () => {
  // 通过 useState 可以创建一个 状态属性 和一个赋值方法
  const [ name, setName ] = useState('')

  // 通过 useEffect 可以对副作用进行处理
  useEffect(() => {
    console.log(name)
  }, [ name ])

  // 通过 useMemo 能生成一个依赖 name 的变量 message
  const message = useMemo(() => {
    return `hello, my name is ${name}`
  }, [name])

  return <div>{ message }</div>
}
```



#### `Vue` 中的 `Hooks`

而在 `vue` 中，`Hooks` 写法依赖于**组合式API**，故此要求版本需要提升至至少 `vue3` 进行使用：

```vue
<template>
  <div>
    {{ message }}
  </div>
</template>
<script setup>
import { computed, ref } from 'vue'
// 定义了一个 ref 对象
const name = ref('')
// 定义了一个依赖 name.value 的计算属性
const message = computed(() => {
  return `hello, my name is ${name.value}`
})
</script>
```

与 `react` 不同的是，可以很明显的看出，有关 `vue` 中引用的 `API`，并不用使用 `usexxx` 来进行命名，而是与往常使用没什么不同，两方的约定并不是完全相同的。



#### `Vue` 与 `React` 中 `Hook` 的异同

相似点

1. 两者的总体思路都是遵循，**定义状态数据**、**操作状态数据**、**隐藏操作内部**的核心思路。

差异点

1. `vue` 的组件中，`setup` 作为一个更早于 `created` 的生命周期存在，故此无论如何，一个组件中的渲染过程只会进行一次。
2. `React` 由于是函数式组件，如果没有 `memorized` ，它们可能会不停地被触发并执行方法，因此需要开销的资源相比 `vue` 会更多。