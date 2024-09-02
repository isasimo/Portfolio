// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import ProjectTemplate from './components/ProjectTemplate.vue';
import ProjectConstructor from './components/ProjectConstructor.vue';
import ProjectJSU from './components/ProjectJSU.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/constructor', component: ProjectConstructor },
    { path: '/jsu', component: ProjectJSU },

    /* ONLY FOR TEMPLATE PREVIEW
    Comment for production */
    { path: '/project-template', component: ProjectTemplate },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;