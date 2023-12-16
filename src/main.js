import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueLazyload from "vue-lazyload";
import '@/assets/scss/main.scss'
import router from './router/routes'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(VueLazyload)

app.mount('#app')