import Vue from 'vue'
import Router from 'vue-router'
import ProductsList from './views/ProductsList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ProductsList',
      meta: { title: '外卖商品列表' },
      component: ProductsList
    },
    {
      path: '/OrderForm/:id',
      name: 'OrderForm',
      meta: { title: '外卖配送表单' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/OrderForm.vue')
    },
    {
      path: '/OrderList',
      name: 'OrderList',
      meta: { title: '全部订单' },
      component: () => import(/* webpackChunkName: "about" */ './views/OrderList.vue')
    }
  ]
})
