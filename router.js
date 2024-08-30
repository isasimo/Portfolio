// router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import ProjectConstructor from './components/ProjectConstructor.vue';
import ProjectTemplate from './components/ProjectTemplate.vue';
/* import Project2 from './components/Project2.vue'; */

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: '/constructor', component: ProjectConstructor },
    /*      { path: '/project2', component: Project2 }, */

    /* ONLY FOR PREVIEW
    Comment for production */
    { path: '/project-template', component: ProjectTemplate },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;