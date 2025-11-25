import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '../views/ProjectView.vue'
import HomeView from '../views/HomeView.vue'
import EntrepriseView from '../views/EntrepriseView.vue'

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/:name',
    name: 'ProjectView',
    component: ProjectView,
    props: true
  },
    {
    path: '/Diagram',
    name: 'EntrepriseView',
    component: EntrepriseView,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router