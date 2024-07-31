import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from "../views/loginvView.vue"
import dashboard from "../views/DashboardView.vue"
import category from "../views/CategoryView.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/login',
    name : 'login',
    component  : loginView
  },
  {
    path :'/dashboard',
    name : 'dashboard',
    component : dashboard
  },
  {
    path : '/category/:id',
    name : 'category',
    component  : category
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
