import Vue from 'vue'
import App from './App.vue'
import router from './router'
import filter from './filters'

Vue.config.productionTip = false

new Vue({
  filter,
  router,
  render: h => h(App)
}).$mount('#app')
