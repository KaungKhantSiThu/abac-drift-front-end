import {
    createRouter as _createRouter,
    createMemoryHistory,
    createWebHistory,
} from 'vue-router'

import Home from '../pages/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/mechanic',
        name: 'Mechanic',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../pages/Mechanic.vue')
    }
]

export function createRouter() {
    return _createRouter({
        // use appropriate history implementation for server/client
        // import.meta.env.SSR is injected by Vite.
        history: import.meta.env.SSR
            ? createMemoryHistory('/test/')
            : createWebHistory('/test/'),
        routes,
    })
}