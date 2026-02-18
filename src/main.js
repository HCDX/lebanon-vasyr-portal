import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVfm } from 'vue-final-modal'
import { createGtag } from 'vue-gtag'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-final-modal/style.css'
import { tooltip } from '@/directives/directives.js'

// Make jQuery and Popper available globally for Bootstrap
import $ from 'jquery'
import Popper from 'popper.js'
window.$ = window.jQuery = $
window.Popper = Popper

const app = createApp(App)

const vfm = createVfm()

app.directive('tooltip', tooltip)
app.use(router)
app.use(vfm)
app.use(createGtag({
  config: { id: "G-6N8Q8GQ89F" }
}))

app.mount('#app')
