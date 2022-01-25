import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'
import VueAnalytics from 'vue-ua'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/directives/directives.js'

Vue.config.productionTip = false
Vue.use(VModal)

Vue.use(VueAnalytics, {
  appName: 'VASyR Website', // Mandatory
  appVersion: '3.0', // Mandatory
  trackingId: 'G-6N8Q8GQ89F', // Mandatory
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
