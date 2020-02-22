import VueRouter from 'vue-router'

// 导入 app 组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

// 导入 Account 的两个子组件
import login from './subcom/login.vue'
import reg from './subcom/reg.vue'


const router = new VueRouter({
    routes: [
        // 
        {
            path: '/account',
            component: account,
            children: [
                { path: '/login', component: login },
                { path: '/reg', component: reg }
            ]
        },
        { path: '/goodslist', component: goodslist }
    ]
})

export default router