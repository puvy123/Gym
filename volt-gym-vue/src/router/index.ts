import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProgramsPage from '../pages/ProgramsPage.vue'
import TrainersPage from '../pages/TrainersPage.vue'
import MembershipPage from '../pages/MembershipPage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ContactPage from '../pages/ContactPage.vue'

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [
    { path: '/', name: 'home', component: HomePage },
    { path: '/programs', name: 'programs', component: ProgramsPage },
    { path: '/trainers', name: 'trainers', component: TrainersPage },
    { path: '/membership', name: 'membership', component: MembershipPage },
    { path: '/about', name: 'about', component: AboutPage },
    { path: '/contact', name: 'contact', component: ContactPage },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
