import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

import ProductCatalog from './components/ProductCatalog'
import ManageProducts from './components/ManageProducts'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/product-catalog',
      name: 'product-catalog',
      component: ProductCatalog
    },
    {
      path: '/manage-products',
      name: 'manage-products',
      component: ManageProducts
    }
  ]
})
