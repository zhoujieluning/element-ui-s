import Vue from 'vue'
import App from './App.vue'
import  '../components/css/demo'
import table from '../packages/lib/table'
import $Print from '../packages/lib/print'
Vue.config.productionTip = false

Vue.use(table)
console.log($Print);
Vue.prototype.$Print = $Print

new Vue({
  render: h => h(App),
}).$mount('#app')
