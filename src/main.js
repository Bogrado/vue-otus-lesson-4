import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { index } from '@/store'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { router } from '@/router/router.js'

const app = createApp(App)

app.use(autoAnimatePlugin)
app.use(router)
app.use(index)
app.mount('#app')
