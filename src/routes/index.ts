import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Cookie from 'js-cookie'

// Utility to get the token
const getToken = () => Cookie.get('token')

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/home/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/auth/login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/auth/register.vue')
    },
    {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import( /* webpackChunkName: "home" */ '../views/admin/dashboard/index.vue'),
        meta: { requiresAuth: true } // <-- Add meta field
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, _from, next) => {
    const token = getToken()

    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next({ name: 'login' })
    } else if ((to.name === 'login' || to.name === 'register') && token) {
        next({ name: 'dashboard' })
    } else {
        next()
    }
})

export default router