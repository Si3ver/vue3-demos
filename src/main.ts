import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Terminal from 'vue-web-terminal'
import 'vue-web-terminal/lib/theme/dark.css'
import '@xterm/xterm/css/xterm.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// @ts-ignore-next-line
app.use(Terminal)
app.mount('#app')

app.config.errorHandler = (err) => {
  /* 处理错误 */
  console.error('[errorHandler]', err)
}
