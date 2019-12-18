import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)
/*
  This class handles the routes between pages if they exist
  currently only one route exists as the website is a one pager
  with different components
*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})
