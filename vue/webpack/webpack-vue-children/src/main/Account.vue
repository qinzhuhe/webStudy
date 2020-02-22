<template>
    <div>
        <h1>这是 Account 组件</h1>
        <router-link to='login'>登录</router-link>
        <router-link to='reg'>注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>
/* 普通的 style 标签只支持普通的样式，如果想要启用 less 或 sass ，需要为 style元素设置 lang 属性 */
// 只要 style 标签，是在 .vue 组件中定义的，那么，推荐都为 style 开启 scoped 属性。
    body {
        div {
            color: skyblue;
            font-style: italic;
        }
    }
</style>