import 'ant-design-vue/dist/reset.css'
import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import 'dayjs/locale/vi'
import { setupI18n } from './i18n/translation'

dayjs.extend(duration)
dayjs.locale('vi')

const app = createApp(App)

app.use(createPinia())
app.use(router)

const i18n = await setupI18n()

app.use(i18n)
app.mount('#app')
