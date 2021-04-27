import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from "vue-router";
import { clearPending } from "@/api/axios"
const helloworld = () => import('@/components/HelloWorld.vue');
const list = () => import('@/components/list/list.vue');
const login = () => import('@/components/login.vue');
const leftnav = () => import('@/components/leftnav.vue');
const header = () => import('@/components/header.vue');
const ceshi = () => import('@/components/ceshi.vue');

const routes = [
    {
        path: "/hellowworld",
        name: "首页",
        component: helloworld
    },
    { path: '', redirect: '/login' },
    {
        path: '/',
        name: "111",
        component: login,
    },
    {
        path: "/list",
        name: "列表",
        component: list,
    },
    {
        path: "/login",
        name: "登录",
        component: login,
    },
    {
        path: "/leftnav",
        name: "菜单",
        component: leftnav,
    },
    {
        path: "/header",
        name: "导航",
        component: header,
    },
    {
        path: "/ceshi",
        name: "测试",
        component: ceshi,
    }


]
console.log(createWebHistory)

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    //在跳转路由之前，先清除所有的请求
    // clearPending()
    // ...
    next()
})
export default router