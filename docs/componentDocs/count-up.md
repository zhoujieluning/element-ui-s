# count-up

<!-- 说明： -->
<!-- demo-block 组件即为.vuepress/components/base/codeBox文件，vuepress会默认把它b析为`demo-block`组件;  title为代码示例标题；description为代码示例说明；onlineLink为在线运行配置的网址 -->

<!-- highlight-code为引入的第三方代码高亮组件，里面包裹的就是上面示例组件的代码 -->
<demo-block 
title="按钮类型"
 description="按钮类型通过设置type为primary、success、info、warning、danger、text创建不同样式的按钮，不设置为默认样式。"
 onlineLink="https://codepen.io/1011el/pen/KjEOWO">
  <els-count-up  :endVal="12345678" ></els-count-up>
  <highlight-code slot="highlight" lang="vue">
    <template>
       <els-count-up  :endVal="123456781" ></els-count-up>
    </template>
  </highlight-code>
</demo-block>


### Attributes
| 参数| 说明| 类型| 必填| 默认值
| ----| ----| ----| ----| ----| 
| width| 卡片宽度| Number| fasle| -| 
| heigth| 卡片宽度| Number| fasle| -| 
| imgurl| 卡片宽度| Number| fasle| -| 
| width| 卡片宽度| Number| fasle|-|