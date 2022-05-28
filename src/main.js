import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { provideAppToast } from './plugins/vue-toast.js'
import 'vue-toastification/dist/index.css';

const options = {
    position: 'bottom-right',
    timeout: 2000
}

const dev = true
let url = "http://35.158.203.11"
// let url = "http://olubolu.com"

if (dev) {
    url = "http://127.0.0.1:8000"
}

import axios from 'axios'
axios.defaults.baseURL = url



createApp(App)
    .use(store)
    .use(router)
    .use(provideAppToast, options)
    .mount('#app')

