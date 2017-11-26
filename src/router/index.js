import Vue from 'vue'
import VueRouter from 'vue-router'

import firstPage from '../pages/firstPage/firstPage.vue'
import classify from '../pages/classify/classify.vue'
import shopCart from '../pages/shopCart/shopCart.vue'
import myEpet from '../pages/myEpet/myEpet.vue'
import typeDog from '../pages/typeDog/typeDog.vue'
import sortClass from '../pages/classify/sortClass/sortClass.vue'
import sortBrand from '../pages/classify/sortBrand/sortBrand.vue'
import login from '../pages/myEpet/login/login.vue'
import register from '../pages/myEpet/register/register.vue'
import adressRouter from '../pages/adressRouter/adressRouter.vue'
// const firstPage = () => import('pages/firstPage/firstPage.vue')
// const classify = () => import('pages/classify/classify.vue')
// const shopCart = () => import('pages/shopCart/shopCart.vue')
// const myEpet = () => import('pages/myEpet/myEpet.vue')

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:"active",
  routes: [//配置4个路由
    {//默认路由
      path: '/',
      redirect: '/firstPage'
    },
    {
      path: '/firstPage',
      component: firstPage
    },
    {
      path: '/classify',
      component: classify,
      children: [
        {
          path: '/',
          redirect: '/sortClass'
        },
        {
          path: '/sortClass',
          component: sortClass
        },
        {
          path: '/sortBrand',
          component: sortBrand
        }
      ]
    },
    {
      path: '/shopCart',
      component: shopCart
    },
    {
      path: '/myEpet',
      component: myEpet,
      children: [
        {
          path: '/',
          redirect: '/login'
        },
        {
          path: '/login',
          component: login
        },
        {
          path: '/register',
          component: register
        }
      ]
    },
    {
      path: '/typeDog',
      component: typeDog
    },
    {
      path: '/adressRouter',
      component: adressRouter
    }
  ]
})
