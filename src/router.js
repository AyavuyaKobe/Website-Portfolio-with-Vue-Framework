// Import necessary Vue and Vue Router dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Import your Vue components
import HomePage from '@/HomePage/HomePage.vue'
import AboutMePage from '@/AboutMe/AboutMe.vue'
import ContactPage from '@/ContactPage/ContactPage.vue'
import NotFoundPage from '@/NotFoundPage/NotFoundPage.vue'

// Use Vue Router in your Vue application
Vue.use(VueRouter)

// Define your routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutMePage
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundPage
  }
]

// Create a Vue Router instance
const router = new VueRouter({
  mode: 'history', // Use history mode to remove the hash from the URL
  base: process.env.BASE_URL, // Set the base URL for your app
  routes
})

// Export the router instance to be used in your main Vue instance
export default router
