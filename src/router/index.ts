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
import profile from "../views/profileView.vue"
import changePass from "../views/changePasswordView.vue"
import car from "../views/carsTabs.vue"
import lists from "../views/priceListView.vue"
import list from "../views/singleShippingList.vue"
import search from "../views/searchCarView.vue"
import terms from "../views/termView.vue"
import privacy from "../views/privacyView.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path : '/terms',
    component : terms
  },
  {
    path : '/privacy',
    component : privacy
  },
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
    path : '/car/:id',
    component : car
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
    path : '/show-subCustomer/:id',
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
  },
  {
    path : '/profile',
    component : profile
  },
  {
    path : '/changePass',
    component : changePass
  },
  {
    path : '/shipping-lists',
    component : lists
  },
  {
    path : '/list/:id',
    component : list
  },
  {
    path : '/search',
    component : search
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
