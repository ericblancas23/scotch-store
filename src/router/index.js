import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Admin/Index'
import New from '@/pages/Admin/New'
import Edit from '@/pages/Admin/Edit'
import Product from '@/pages/Admin/Product'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'Admin',

      // Parent routes still has a component
      component: Index,

      children: [
        {
          path: 'new',
          name: 'New',
          component: New
        },
        {
          path: '',
          name: 'Product',
          component: Product
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit
        }
      ]
    }
  ]
})
