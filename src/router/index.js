import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
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


newRouter.beforeEach((to, from, next) => {
  console.log(store);
  let token = store.getters.userInfo.token
  console.log(token);
  if(token){
    if(to.name === 'Login'){
      next({name:'Home'})//登录状态去Login直接跳转到Home页
    }else{
      next()
    }
  }else{//未登录都去Login页
    if(to.name==='Login'){
      next()
    }else{
      next({name:'Login'})
    }
  }
})

export default newRouter
