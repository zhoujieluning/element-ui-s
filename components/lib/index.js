import Form from './form'
import Table from './table'
import CountUp from './count-up'
import Print from './print'
import Nprogress from './nprogress'

const components = [
    Form,
    Table,
    CountUp
]
console.log(CountUp);
const install = function(Vue){
    if(install.installed)return
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
    Vue.prototype.$Print = Print
    Vue.prototype.$Nprogress = Nprogress
}
if(typeof window !== 'undefined'&&window.Vue){
    install(window.Vue)
}
export default {
    install,
}

