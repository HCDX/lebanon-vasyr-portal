import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'

/*
  This class handles the routes between pages if they exist
  currently only one route exists as the website is a one pager
  with different components
*/
const router = createRouter({
  history: createWebHistory('/vasyr'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router
