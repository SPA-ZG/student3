import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue';
import Services from '../views/Services.vue';
import Contact from '../views/Contact.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // routing (više stranica)
  routes: [
    { path: '/', component: Home },
    { path: '/courses', component: Courses },
    { path: '/services', component: Services },
    { path: '/contact', component: Contact },
    { path: '/:catchAll(.*)', redirect: '/' },
  ]
})

export default router
