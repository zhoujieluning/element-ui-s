import Form from './form'
import Table from './table'
import CountUp from './count-up'
import TextEllipsis from './text-ellipsis'
import Sign from './sign'
import Video from './video'
import Chat from './chat'
import Magnifie from './magnifie'
import Print from './print'
import Qrcode from './qrcode'
import Watermark from './watermark'
import Keyboard from './keyboard'
import Typer from './typer'
import Screenshot from './screenshot'
import Sticker from './sticker'
import Nprogress from './nprogress'
import Fullscreen from './fullscreen'
import Dialogdrag from './dialogdrag'
import HighlightCode from './highlight-code'

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

