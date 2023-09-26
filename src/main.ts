import { createApp } from 'vue'
import '@/assets/main.css'
import { createPinia } from 'pinia'

import router from './router'

import App from './App.vue'
import './samples/node-api'



createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
    .$nextTick(() => {
      postMessage({ payload: 'removeLoading' }, '*')
    })














