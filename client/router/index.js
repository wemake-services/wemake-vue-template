import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home'

const Async = () => import('views/Async')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/async', component: Async },
    { path: '/', component: Home }
  ]
})
