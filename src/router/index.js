import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// const ThisShouldNotBeLoaded = () => import(/* webpackChunkName: "ThisShouldNotBeLoaded" */ '@/components/Fail.vue')

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  }, {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/fail',
    name: 'fail',
    component: () => import(/* webpackChunkName: "ThisShouldNotBeLoaded" */ '../components/Fail.vue')
  }]
})

export default router
