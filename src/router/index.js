import Vue from 'vue'
import Router from 'vue-router'
import CatsContainer from '@/components/CatsContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CatsContainer',
      component: CatsContainer
    }
  ]
})
