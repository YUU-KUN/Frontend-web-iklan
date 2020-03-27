import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import '../public/template_frontend/assets/css/vendor.bundle.base.css'
// import '../public/template_frontend/assets/css/style.css'
// import '../public/template_frontend/assets/css/materialdesignicons.min.css'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
