import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Home from 'views/Home'

// Async components:
const Async = () => import('views/Async')

// Mounting plugins:
Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/async', component: Async },
    { path: '/', component: Home }
  ]
})
