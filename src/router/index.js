import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Country from '../views/Country.vue'
import City from '../views/City.vue'
import Food from '../views/Country/Food.vue'
import Cost from '../views/Country/Cost.vue'
import Transport from '../views/Country/Transport.vue'
import App from '../views/Country/Apps.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:country_slug',
    name: 'Country',
    component: Country
  },
  {
    path: '/:country_slug/:city_slug',
    name: 'City',
    component: City
  }, 
  {
    path: '/food/:country_slug',
    name: 'Food',
    component: Food
  },
  {
    path: '/cost-of-living/:country_slug',
    name: 'Cost Of Living',
    component: Cost
  },
  {
    path: '/transport/:country_slug',
    name: 'Transport',
    component: Transport
  },
  {
    path: '/app-and-website/:country_slug',
    name: 'Apps & Websites',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
