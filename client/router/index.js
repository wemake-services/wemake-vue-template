import Vue from 'vue'
import Router from 'vue-router'
import Home from 'client/views/Home'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
