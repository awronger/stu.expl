import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/view/home/Home.vue'

Vue.use(Router)

const newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/view/login/Login.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/view/home/Home.vue')
    },
  ]
})

let session = {}//登录session信息，判断登录状态

newRouter.beforeEach((to, from, next) => {
  if (session.name === undefined && to.name != 'Login') {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default newRouter
