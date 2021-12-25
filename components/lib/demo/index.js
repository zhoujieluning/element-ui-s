import Demo from './src/main.vue'
Demo.install =function(Vue){
    console.log(Vue)
    Vue.component(Demo.name,Demo)
}
export default Demo