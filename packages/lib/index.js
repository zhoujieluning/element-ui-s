import Chat from './chat'
import CountUp from './count-up'
import Dialogdrag from './dialogdrag'
import Form from './form'
import Fullscreen from './fullscreen'
import HighlightCode from './highlight-code'
import Keyboard from './keyboard'
import Magnifie from './magnifie'
import Nprogress from './nprogress'
import Print from './print'
import Qrcode from './qrcode'
import Screenshot from './screenshot'
import Sign from './sign'
import Sticker from './sticker'
import Table from './table'
import TextEllipsis from './text-ellipsis'
import Typer from './typer'
import Video from './video'
import Watermark from './watermark'


const components = [
    Form,
    Table,
    CountUp,
    Sign,
    Video,
    TextEllipsis,
    Chat,
    Keyboard,
    Magnifie,
    HighlightCode,
    Qrcode,
    Typer,
    Sticker
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
    Vue.prototype.$Fullscreen = Fullscreen
    Vue.directive('dialogdrag',Dialogdrag)
}
if(typeof window !== 'undefined'&&window.Vue){
    install(window.Vue)
}
export default {
    install,
}
