import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'

//For country
import Country from '../views/Country.vue'
import App from '../views/Country/Apps.vue'
import Transport from '../views/Country/Transport.vue'
import Food from '../views/Country/Food.vue'

// For City
import Cost from '../views/City/Cost.vue'
import City from '../views/City.vue'
import Score from '../views/City/Score.vue'
import Visit from '../views/City/Visit.vue'
import Rent from '../views/City/Rent.vue'

//for Common
import Image from '../views/Common/Image.vue'

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
    path: '/search',
    name: 'Search',
    component: Search
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
    path: '/transport/:country_slug',
    name: 'Transport',
    component: Transport
  },
  {
    path: '/app-and-website/:country_slug',
    name: 'AppsAndWebs',
    component: App
  },
  {
    path: '/cost-of-living/:city_slug',
    name: 'Cost Of Living',
    component: Cost
  },
  {
    path: '/score/:city_slug',
    name: 'Score',
    component: Score
  },
  {
    path: '/visit/:city_slug',
    name: 'See',
    component: Visit
  },
  {
    path: '/stay/:city_slug',
    name: 'Stay',
    component: Rent
  },
  {
    path: '/image/:country_slug',
    name: 'Images',
    component: Image
  },
  {
    path: '/image/:city_slug',
    name: 'Image',
    component: Image
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
