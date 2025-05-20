import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '../views/ProjectView.vue'
import HomeView from '../views/HomeView.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router