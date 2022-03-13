import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import WishList from '../views/WishList.vue'
import BookList from '../components/BookList.vue'
import Blog from '../components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: BookList
  },
  {
    path: '/WishList',
    name: 'wishlist',
    component: WishList
  },
  {
    path: '/Blog',
    name: 'blog',
    component: Blog
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
