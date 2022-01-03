

# 快速开始

#### 1.安装组件库

```sh
    npm i element-ui-s 
```

#### 2.引用组件库

#### 完整引入
在 main.js 中写入以下内容：
```js
// main.js 完整引入 
import Vue from 'vue';
import 'element-ui-s/lib/theme-chalk/index.css';
import ElementUiS from 'element-ui-s';
Vue.use(ElementUiS);
```
##### 按需引入
 首先，安装 babel-plugin-component,借助该插件，我们可以只引入需要的组件，以达到减小项目体积的目的。
```sh
npm install babel-plugin-component -D
```
然后，将 .babelrc 或 babel.config.json 文件 修改,.babelrc举例子（ps:element官网还不改这的代码，坑小白）：
```JS
// .babelrc
{
  "presets": [["@babel/preset-env", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui-s", 
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

```
babel-plugin-component的作用为编译源码如下（彩蛋：某些时候你可能会想用下面方式引入哦~~~~~哈哈）
```js
import { CountUp } form 'element-ui-s'
=> // 编译成下面这种
import CountUp from 'element-ui-s/lib/count-up.js'
require('element-ui-s/lib/theme-chalk/count-up.css')
```

```js
// main.js 按需引入 (组件，方法，指令3种)
import Vue from 'vue';
import { CountUp,Print，Dialogdrag } from 'element-ui-s';
Vue.use(CountUp) // <els-countUp/>
Vue.prototype.$Print = Print // this.$Print('#app')
Vue.dreactive('dialogdrag',Dialogdrag) // v-dialogdrag
```

:::

### 完整组件列表和引入方式
完整组件列表和引入方式（完整组件列表以 /packages/lib/index.js 为准）
```js
// main.js
import Vue from 'vue';
import {
    Chat
CountUp
Dialogdrag
Form
Fullscreen
HighlightCode
Keyboard
Magnifie
Nprogress
Print
Qrcode
Screenshot
Sign
Sticker
Table
TextEllipsis
Typer
Video
Watermark
} form 'element-ui-s'
Vue.use(Chat)
Vue.use(CountUp)
Vue.use(Form)
Vue.use(HighlightCode)
Vue.use(Keyboard)
Vue.use(Magnifie)
Vue.use(Qrcode)
Vue.use(Sign)
Vue.use(Sticker)
Vue.use(Table)
Vue.use(TextEllipsis)
Vue.use(Typer)
Vue.use(Video)
Vue.prototype.$Print = Print
Vue.prototype.$Nprogress = Nprogress
Vue.prototype.$Watermark = Watermark
Vue.prototype.$Screenshot = Screenshot
Vue.prototype.$Fullscreen = Fullscreen
Vue.directive('dialogdrag',Dialogdrag)
```


## 开始使用
至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。


<start />
<vssue />
