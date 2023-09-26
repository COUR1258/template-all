import { createApp } from 'vue'
import './assets/main.css'
import { createPinia } from 'pinia'

import router from './router'

import App from './App.vue'
import './samples/node-api'


const app = createApp(App)


app.use(createPinia())
app.use(router)

app.mount('#app')
app..$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})













