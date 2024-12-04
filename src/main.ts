import 'ant-design-vue/dist/reset.css'
import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setupI18n } from './i18n/translation'

import DatePicker from 'ant-design-vue/es/date-picker/date-fns'
import TimePicker from 'ant-design-vue/es/time-picker/date-fns'
import Calendar from 'ant-design-vue/es/calendar/date-fns'
import antd from 'ant-design-vue'

const app = createApp(App)

const i18n = await setupI18n()
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(DatePicker).use(TimePicker).use(Calendar).use(antd)
app.mount('#app')
