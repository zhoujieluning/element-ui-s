import Demo from './demo'
import table from './table'

const components = [
    Demo,
    table
]
const install = function(Vue){
    if(install.installed)return
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
}
if(typeof window !== 'undefined'&&window.Vue){
    install(window.Vue)
}
export default {
    install
}

