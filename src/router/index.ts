import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Main from '../views/Main.vue';
import ContactMe from '../views/ContactMe.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'Main',
        component: Main,
    },
    {
        path: '/contact-me',
        name: 'ContactMe',
        component: ContactMe,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
