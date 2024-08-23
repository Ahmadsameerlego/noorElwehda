import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginView from "../views/loginvView.vue"
import dashboard from "../views/DashboardView.vue"
import category from "../views/CategoryView.vue"
import mycars from "../views/mycarsView.vue"
import ledger from "../views/ledgerView.vue"
import cartDetails from "../views/carDetails.vue"
import subCustomers from "../views/subCustomers.vue"
import addSubCustomer from "../views/addSubCustomer.vue"
import showSubCustomer from "../views/showSubCustomer.vue"
import editSubCustomer from "../views/editSubCustomer.vue"
import register from "../views/registerView.vue"
import contact from "../views/contactView.vue"
import about from "../views/aboutView.vue"
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
    path : '/register',
    component : register
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
  },
  {
    path  :'/mycars',
    component : mycars
  },
  {
    path : '/ledger',
    component : ledger
  },
  {
    path : '/cart-details/:id',
    component : cartDetails
  },
  {
    path : '/subCustomers',
    component : subCustomers
  },
  {
    path : "/add-subCustomer",
    component : addSubCustomer
  },
  {
    path : '/show-subCustomer',
    component : showSubCustomer
  },
  {
    path : '/editSubCustomer/:id',
    component : editSubCustomer
  },
  {
    path : '/contact',
    component : contact
  },
  {
    path : '/about',
    component : about
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
