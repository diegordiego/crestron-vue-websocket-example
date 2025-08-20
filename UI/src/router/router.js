import { createMemoryHistory, createRouter } from 'vue-router';
import Home from '../views/Home.vue';
import Displays from '../views/Displays.vue';
import Music from '../views/Music.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Displays',
        name: 'Displays',
        component: Displays,
    },
    {
        path: '/Music',
        name: 'Music',
        component: Music,
    },
];

const router = createRouter({
    history: createMemoryHistory(),
    routes,
});

export default router;
