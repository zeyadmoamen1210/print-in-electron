import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import db from './datastore'
// import VueRouter from './plugins/vue-router';

/* Other Code */

Vue.prototype.$db = db
// const routes = [
//   {path:'/barcode', component: () => './components/barcode'}
// ];

// const router = new VueRouter({
//   routes
// })

new Vue({
  render: h => h(App),
  // router
}).$mount('#app')
