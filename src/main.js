import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import WaveUI from 'wave-ui'
import 'wave-ui/dist/wave-ui.css'

createApp(App)
    .use(WaveUI, { /* Some Wave UI options */ })
    .mount('#app')
