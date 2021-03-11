import { createRouter, createWebHistory } from 'vue-router'
import Examples from '../views/Examples.vue'

const routes = [{
        path: '/',
        name: 'Examples',
        meta: {
            title: "Examples"
        },
        component: Examples
    },
    {
        path: '/reusable',
        name: 'Reusable',
        meta: {
            title: "Reusable Widgets"
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Reusable.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router