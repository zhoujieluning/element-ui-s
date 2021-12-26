## 安装

::: tip
**克隆项目**  
git clone https://github.com/ShuangDa1018/element-ui-s_doc.git

**进入项目目录**  
cd element-ui-s_doc

**安装依赖**  
npm install

**建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题**  
npm install --registry=https://registry.npm.taobao.org

**启动服务**  
npm run serve

浏览器访问 http://localhost:6868
:::

## 项目结构目录说明

```
|-- element-ui-s
    |-- components // 组件库源码
    |-- dist // 打包后的组件库
    |-- public.js // 打包组件库css
    |-- examples // 测试组件网页入口（npm run examples）
    |-- vue.config.js // 测试组件网页配置
    |-- webpack.config.js //webpack打包组件库js配置
    |-- gulpfile.js // gulpfile打包组件库css配置
    |-- .prettierrc.json // prettierrc代码格式化配置
    |-- babel.config.js //babel配置
    |-- .gitignore.js // git 过虑文件
    |-- README.md // 先读我
    |-- yarn.lock
    |-- LICENSE //许可证
    |-- deploy.sh   //用于自动部署(npm run deploy)
    |-- package-lock.json
    |-- package.json
    |-- docs // 基于vuepress的文档页(npm run serve)
```

## 快速开始

### step1

将自己的组件库放到根目录上，然后在 docs/.vuepress/enhanceApp.js 进行配置

::: tip

```js
//docs/.vuepress/enhanceApp.js

//引入你的组件库 确保你的组件库index文件有install方法
//如果不会，没关系，src目录里自带一个简单组件库示例，可供参考
import Cat from '../../src/index';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  Vue.use(Cat);
};
```

:::

然后配置你的侧边栏路径，详细配置可以直接查看 docs/.vuepress/components/config.js 内的注释。
::: tip

```js
// docs/.vuepress/components/config.js

//这里配置的是button组件页面的路径
sidebar:{
    '/components/2.0/':[
        {
            title: '基础组件',   // 必要的 配置侧边栏名称
            path: '',
            collapsable: false, // 可选的, 右侧侧边栏是否展开,默认值是 true
            // 如果组件很多时，建议将children配置单独放到一个js文件中，然后进行引入
            children: [
                {
                    title:'Button 按钮',
                    path: 'catButton', //在项目中对应的路径是 docs/components/2.0/catButton.md
                }]
        }
    ]
},

```

:::

### step2

现在你已经可以开始编写自己的组件文档了，这里先编写一个组件展示示例：以我的 cat-button 为例

::: tip

```html
// docs/.vuepress/components/demo/catButton/type_catButton.vue

<template>
  <!-- 注意这段代码会放入slot里，所以必须再包裹一层div，否则会解析报错 -->
  <div>
    <cat-button text="default"></cat-button>
    <cat-button text="primary" type="primary"></cat-button>
    <cat-button text="success" type="success"></cat-button>
    <cat-button text="info" type="info"></cat-button>
    <cat-button text="warning" type="warning"></cat-button>
    <cat-button text="danger" type="danger"></cat-button>
    <cat-button text="text" type="text"></cat-button>
  </div>
</template>

<script>
  export default {};
</script>
```

:::

### step3

在上面配置好的路径里 docs/components/2.0/catButton.md，创建 markdown 文件。接着就可以愉快地编写 button 组件页面！
::: tip

```html
// docs/components/2.0/catButton.md --- title: 2.0 Button 按钮 ---

<!-- baseComponent-codeBox 组件即为.vuepress/components/baseComponent/codeBox文件，vuepress会默认把它解析为`baseComponent-codeBox`组件，这里我们如下对代码进行包裹，具体功能可以查看codeBox注释和页面效果 -->
<baseComponent-codeBox
  title="按钮类型"
  description="按钮类型通过设置type为primary、success、info、warning、danger、text创建不同样式的按钮，不设置为默认样式。"
  onlineLink="https://codepen.io/ShuangDa1018/pen/KjEOWO"
>
  <!-- 同理demo-catButton-type_catButton即为我们step2编写的示例组件 -->
  <demo-catButton-type_catButton></demo-catButton-type_catButton>

  <!-- 这里highlight-code为引入的第三方代码高亮组件，里面包裹的就是上面示例组件的代码 -->
  <!-- 注意引入代码一定不能缩进！！！否则不能生效！-->
  <highlight-code slot="codeText" lang="vue">
    <<< @/docs/.vuepress/components/demo/catButton/type_catButton.vue
  </highlight-code>
</baseComponent-codeBox>

<!-- 组件的参数表格,这里我没有使用自带的markdown表格，因为太丑，样式不好修改，有时参数描述较少时，不能自动撑满一行，所以自己写了一个组件；titile为表格标题，tableHead为表头，tableBody为具体参数设置，并且支持el-table的table参数 -->
<baseComponent-apiTable
  title="Table Attributes"
  :tableHead="tableHead"
  :tableBody="tableBody"
>
</baseComponent-apiTable>

<!-- Vssue为引入的评论插件 -->
<Vssue title="Vssue Demo" />

<!-- 其实在vuepress里的每个.md其实和.vue很像的，你基本可以按照vue组件模式来写 -->
<script>
  // 基本上和写vue一样
  export default {
    data() {
      return {
        //表头为字符串，写法和md一样，中间以`|`间隔就行
        tableHead: `参数 | 说明 | 类型 | 可选值 | 默认值`,
        //表格为数组，其中每一项为字符串，代表每一行要展示的数据，写法也和md一样，中间以`|`间隔就行
        tableBody: [
          `size | 尺寸 | String | medium / small / mini | —`,
          `type |	类型 | string |	primary / success / warning / danger / info / text | —`,
        ],
      };
    },
  };
</script>

<!-- 和vue一样，也可以设置样式，并且这里style样式只对当前md有效，不需要加上scoped -->
<style></style>
```

:::

至此，你已经完成了一个简单的 button 组件展示，概括来说就是：

1. 配置侧边栏导航
2. 写示例代码
3. 对应的页面 md

更详细的配置和说明都在对应代码里。每个代码文件里，都有逐行的注释及防坑说明。
