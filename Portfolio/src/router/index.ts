import { createRouter, createWebHistory } from 'vue-router'
import ProjectView from '../views/ProjectView.vue'
import HomeView from '../views/HomeView.vue'
import AlternanceView from '../views/AlternanceView.vue'
import StageView from '../views/StageView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/alternance',
    name: 'AlternanceView',
    component: AlternanceView,
  },
  {
    path: '/stage',
    name: 'StageView',
    component: StageView,
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
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router