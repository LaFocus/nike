import { createRouter, createWebHistory } from 'vue-router'
import ProductInfo from '../views/ProductInfo.vue'
import Home from '../views/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    {
      name: 'ProductInfo',
      path: '/product/:id',
      component: ProductInfo,
    }
  ],

  mode: 'history'
})

export default router
