import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import VueApexCharts from 'vue3-apexcharts'



// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



// import primevue 
import PrimeVue from 'primevue/config';
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primevue/resources/primevue.min.css";

import ToastService from 'primevue/toastservice';



// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();



import '@/assets/scss/index.scss'


import { MotionPlugin } from '@vueuse/motion'

createApp(App)
.use(store)
.use(PrimeVue)
.use(ToastService)
.use(MotionPlugin)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.use(VueApexCharts)
.mount('#app')
