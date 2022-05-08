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

import axios from 'axios'
axios.defaults.baseURL = "http://127.0.0.1:8000"

createApp(App)
    .use(store)
    .use(router)
    .use(provideAppToast, options)
    .mount('#app')

