import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import("../views/Home.vue");
const About = () => import("../views/About.vue");
const Contact = () => import("../views/Contact.vue");

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router