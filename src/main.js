import Vue from 'vue'
import App from './App.vue'
import router from './router' // Import the router

new Vue({
  render: h => h(App),
  router // Add the router to your Vue instance
}).$mount('#app')
