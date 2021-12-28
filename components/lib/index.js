import Form from './form'
import Table from './table'
import CountUp from './count-up'
import TextEllipsis from './text-ellipsis'
import Sign from './sign'
import Video from './video'
import Chat from './chat'
import Magnifie from './magnifie'
import Print from './print'
import Watermark from './watermark'
import Keyboard from './keyboard'
import Screenshot from './screenshot'
import Nprogress from './nprogress'
import Dialogdrag from './dialogdrag'

const components = [
    Form,
    Table,
    CountUp,
    Sign,
    Video,
    TextEllipsis,
    Chat,
    Keyboard,
    Magnifie
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
    Vue.directive('dialogdrag',Dialogdrag)
}
if(typeof window !== 'undefined'&&window.Vue){
    install(window.Vue)
}
export default {
    install,
}

