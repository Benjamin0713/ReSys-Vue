import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'


Vue.config.productionTip = false
import '@/assets/css/global.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
