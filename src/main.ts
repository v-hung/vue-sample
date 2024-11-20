import 'ant-design-vue/dist/reset.css'
import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
