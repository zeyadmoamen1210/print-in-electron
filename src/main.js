import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import db from './datastore'

/* Other Code */

Vue.prototype.$db = db




new Vue({
  render: h => h(App),
}).$mount('#app')
