import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { index } from '@/store'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'

const app = createApp(App)

app
  .use(autoAnimatePlugin)
  .use(index)
  .mount('#app')
