import Vue from 'vue'
import Router from 'vue-router'

import App from '../App.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  }

];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new Router({
  mode: 'history',
  routes
})
