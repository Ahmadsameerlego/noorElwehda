import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'



// import bootstrap
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


// import fontawesome
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fas, far, fab);
dom.watch();



import '@/assets/scss/index.scss'

createApp(App)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
