import { createRouter, createWebHistory } from "vue-router";

import AppHome from './components/pages/AppHome.vue'
import AppProjectList from './components/pages/AppProjectsList.vue'
import AppProjectCard from './components/pages/AppProjectCard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {
            path: '/',
            name : 'home',
            component : AppHome,
        },
        {
            path: '/projects',
            name : 'projects.index',
            component : AppProjectList,
        },
        {
            path: '/projects/:slug',
            name : 'projects.show',
            component : AppProjectCard,
        },
    ]});

export{router};
