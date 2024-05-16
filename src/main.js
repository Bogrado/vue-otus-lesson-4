import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { index } from '@/store'

const app = createApp(App)

app
  .use(index)
  .mount('#app')
