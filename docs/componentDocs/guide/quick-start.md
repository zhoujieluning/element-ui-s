## 安装

安装  element-ui-s
```sh
npm install element-ui-s 
```


## 快速开始

### 引入

在 main.js 中写入以下内容：

::: tip
#### 全部引入

```js
// main.js 全部引入 
import Vue from 'vue';
import 'element-ui-s/css/index.css';
import ElementUiS from 'element-ui-s';
Vue.use(ElementUiS);
```

#### 按需引入
 首先，安装 babel-plugin-component,借助该插件，我们可以只引入需要的组件，以达到减小项目体积的目的。
```sh
npm install babel-plugin-component -D
```
然后，将 .babelrc文件 修改为：
```JS
// .babelrc
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui-s", // 不是element-ui
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
```js
// main.js 按需引入 
import Vue from 'vue';
import { Table,Form } from 'element-ui-s';
Vue.component(Table.name, Table);
Vue.component(Form.name, Form);
/* 或写为
 * Vue.use(Table)
 * Vue.use(Form)
 */
```

:::

### 完整组件列表和引入方式
完整组件列表和引入方式（完整组件列表以 /components/lib/index.js 为准）
```js
// main.js
import Vue from 'vue';
import {
    Form,
    Table,
    CountUp,
    Sign,
    Video,
    TextEllipsis,
    Chat,
    Keyboard,
    Magnifie,
    Nprogress,
    Watermark,
    Screenshot,
    Print
} form 'element-ui-s'
Vue.use(Table)
Vue.use(CountUp)
Vue.use(Video)
Vue.use(TextEllipsis)
Vue.use(Chat)
Vue.use(Keyboard)
Vue.use(Magnifie)
Vue.prototype.$Nprogress = Nprogress;
Vue.prototype.$Watermark = Watermark;
Vue.prototype.$Screenshot = Screenshot;
Vue.prototype.$Print = Print;
```


## 开始使用
至此，一个基于 Vue 和 Element 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。


<start />
