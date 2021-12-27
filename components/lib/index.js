import Form from './form'
import Table from './table'
import CountUp from './count-up'
import Sign from './sign'
import Video from './video'
import Print from './print'
import Watermark from './watermark'
import TextEllipsis from './text-ellipsis'
import Screenshot from './screenshot'
import Nprogress from './nprogress'

const components = [
    Form,
    Table,
    CountUp,
    Sign,
    Video,
    TextEllipsis
]
const install = function(Vue){
    if(install.installed)return
    components.forEach(component=>{
        Vue.component(component.name,component)
    })
    Vue.prototype.$Print = Print
    Vue.prototype.$Nprogress = Nprogress
    Vue.prototype.$Watermark = Watermark
    Vue.prototype.$Screenshot = Screenshot
}
if(typeof window !== 'undefined'&&window.Vue){
    install(window.Vue)
}
export default {
    install,
}

