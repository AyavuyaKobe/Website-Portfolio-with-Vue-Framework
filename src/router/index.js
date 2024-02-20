import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Timeline from '../views/Timeline.vue'

 const router = createRouter({
 	history: createWebHistory(),
 	routes: [
 		{
 			path: '/',
 			component: Home
 		},
 		{
 			path: '/about',
 			component: () => import('../views/About.vue')
 		},
 		{
 			path: '/Timeline',
 			component: () => import('../views/Timeline.vue')
 		},
 		 {
		 	path: '/projects',
 		 	component: () => import('../views/Projects.vue')
 		 },
 	],
 })

export default router