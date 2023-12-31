import { createRouter, createWebHistory } from "vue-router";

import AppHome from './components/pages/AppHome.vue'
import AppProjectList from './components/pages/AppProjectsList.vue'
import AppShow from './components/pages/AppShow.vue'
import AppNotFound from "./components/pages/AppNotFound.vue";

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
            component : AppShow,
        },
        {
            path: '/projects/not-found',
            name : 'not-found',
            component : AppNotFound,
        },
    ]});

export{router};
