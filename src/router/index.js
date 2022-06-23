import login from '@/views/login/login.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: login
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue')
    }
]