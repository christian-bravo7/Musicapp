import Search from '@/views/Search.vue';
import About from '@/views/About.vue';
import TrackDetails from '@/views/TrackDetails.vue';

export const routes = [
    {path: '/', component: Search},
    {path: '/track/:id', component: TrackDetails},
    {path: '/about', component: About}
]
