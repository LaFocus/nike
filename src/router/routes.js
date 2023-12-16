import { createRouter, createWebHashHistory } from 'vue-router'
import ProductInfo from '../views/ProductInfo.vue'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home,
    },
    {
      path: '/product/:id',
      name: 'ProductInfo',
      component: ProductInfo,
    }
  ],

  mode: 'history'
})

export default router
