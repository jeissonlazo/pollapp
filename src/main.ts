import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import { router } from './router'
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia'
import ToastService from 'primevue/toastservice'
const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(ToastService)
app.use(PrimeVue, { theme: { preset: Aura } })
app.mount('#app')