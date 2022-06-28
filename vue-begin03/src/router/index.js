import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

// 1. 定义路由组件.
// 也可以从其他文件导入
// 静态导入
// import Home from '../views/Home.vue'
// import About from '../views/About.vue'
// 路由懒加载：用到时再加载
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const User = () => import('../views/User.vue')
const NotFound = () => import('../views/NotFound.vue')
const News = () => import('../views/News.vue')
const Parent = () => import('../views/Parent.vue')
const Styleone = () => import('../views/Styleone.vue')
const Styletwo = () => import('../views/Styletwo.vue')
const Page = () => import('../views/Page.vue')
const ShopTop = () => import('../views/demo/ShopTop.vue')
const ShopMain = () => import('../views/demo/ShopMain.vue')
const ShopFooter = () => import('../views/demo/ShopFooter.vue')

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    {
        path: '/',
        // 重定向
        // redirect: '/home'
        // 命名路由
        // redirect:{name:"home"}
        // 方法
        redirect: (to) => {
            // console.log(to);
            return { path: "/home" }
        }
    },
    {
        path: '/home',
        name: "home",
        component: Home
    },
    {
        path: '/about',
        component: About,
        // 每路守卫（路由独享的守卫）
        beforeEnter: (to, from, next) => {
            console.log(to);
            console.log(from);
            if (123 === 123) {
                next()
            }
        }
    },
    // 路由嵌套
    {
        path: '/parent',
        // 取别名
        // alias:"/father",
        alias: ["/father", '/fuqin'],
        component: Parent,
        children: [
            { path: "styleone", component: Styleone },
            { path: "styletwo", component: Styletwo },
        ]
    },
    // 路由编程式导航
    {
        path: "/page",
        component: Page
    },
    // 动态路由
    {
        path: '/user/:id',
        component: User,
        props: true
    },
    // 正则匹配（动态路由参数一定是数字）
    // { path: '/news/:id(\\d+)', component: News },
    // 有多个参数 
    // { path: '/news/:id+', component: News },
    // 参数是可有可无的   *  参数可以重复叠加
    // { path: '/news/:id*', component: News },
    // 参数是可有可无的  ? 不可以重复叠加
    {
        path: '/news/:id?',
        name: "news",
        component: News
    },
    // 命名视图
    {
        path: "/shop/:id",
        components: {
            default: ShopMain,
            ShopMain,
            ShopTop,
            ShopFooter
        },
        props: {
            default: true,
            ShopTop: false,
            ShopFooter: false
        }
    },
    // （404页面）
    { path: '/:path(.*)', component: NotFound },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    // history: createWebHashHistory(),
    // history模式
    // 二者的区别：有无#号
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})


// 全局守卫
// router.beforeEach((to, from, next) => {
//     // console.log(to);
//     // console.log(from);
//     next()   // 通行证
// })

export default router
