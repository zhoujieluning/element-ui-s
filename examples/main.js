import Vue from 'vue'
import App from './App.vue'
import  '../components/css/demo'
import Demo from '../components/lib/demo'
Vue.config.productionTip = false
console.log(Demo);
Vue.use(Demo)


new Vue({
  render: h => h(App),
}).$mount('#app')
