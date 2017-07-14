import Vue from 'vue'
import Router from 'vue-router'
import CatsContainer from '../components/CatsContainer'
import CatProfile from '../components/CatProfile'
import signup from '../components/signup'
import login from '../components/login'

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
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  }
]

export default new Router({
  mode: 'history',
  routes
})
