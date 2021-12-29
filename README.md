# element-ui-s 组件库

### 文档地址
https://shuangda1018.github.io/element-ui-s/

### 快速开始

#### 1.安装组件库

```sh
    npm i element-ui-s
```

#### 2.引用组件库

#### 全部引入

```js
// main.js 全部引入 
import Vue from 'vue';
import 'element-ui-s/css/index.css';
import ElementUiS from 'element-ui-s';
Vue.use(ElementUiS);
```
##### 按需引入
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

