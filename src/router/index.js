import Vue from 'vue'
import Router from 'vue-router'
import CatsContainer from '../components/CatsContainer'
import CatProfile from '../components/CatProfile'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'CatsContainer',
    component: CatsContainer
  },
  {
    path: '/catprofiles',
    name: 'CatProfile',
    component: CatProfile
  }
]

export default new Router({
  mode: 'history',
  routes
})
