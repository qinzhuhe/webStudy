# slot插槽

- `slot`插槽
  - `slot` 就是子组件里给 `DOM` 留下的坑位
  - <子组件> DOM </子组件>
  - `slot` 是动态的 `DOM`
- `ref` 获取子组件实例
  - 识别：在子组件或元素上使用 `ref=“xxxx”`。
  - 获取：`this.$refs.xxxx` 获取元素。
  - `$el` 是拿其 `DOM`
- `$parent` 获取父组件实例（可在子组件直接使用 `this.$parent` 即可）。