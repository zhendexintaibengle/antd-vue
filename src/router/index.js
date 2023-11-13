import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      title:"用户登录——学子商城",
      hide_header:true,
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta:{
      title:"用户注册——学子商城",
      hide_header:true,
    }
  },
  {
    path: '/product_details/:lid',
    props: true,
    name: 'product_details',
    component: () => import('../views/ProductDetails.vue'),
    meta:{
      title:"商品详情——学子商城",
    }
  },

  {
    path: '/products/:kw?',//?代表参数可传可不传
    props: true,
    name: 'products',
    component: () => import('../views/Products.vue'),
    meta:{
      title:"商品列表——学子商城",
    }
  },
  {
    path: '*',
    name: 'notfound',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta:{
      title:"首页——学子商城",
    }
  },
  {
    path: '/look',
    name: 'look',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
// 路由守卫
router.beforeEach((to, from, next) => {
  // 到哪里去to 从哪里来from，是否通行next
  console.log("to:",to)
  document.title=to.meta.title
  next()
})

export default router
