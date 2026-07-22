import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../components/LandingPage.vue'
import Collections from '../components/Collections.vue'
import ArtworKDetails from '../components/ArtworkDetails.vue'
import Exhibitions from '../components/Exhibitions.vue'
import Commision from '../components/Commision.vue'
import Contact from '../components/Contact.vue'

import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/collections', component: Collections },
    { path: '/artwork/:id', component: ArtworKDetails },
    { path: '/exhibitions', component: Exhibitions },
    { path: '/commission', component: Commision },
    { path: '/contact', component: Contact },
    { path: '/:pathMatch(.*)*', component: NotFound },
  ],
})

export default router
