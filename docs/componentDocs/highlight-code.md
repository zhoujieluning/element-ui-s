# keyboard 打印

<demo-block 
title="示例"
description="els-count-up是一个无依赖的轻量级 vue 组件，可以自己覆盖 easingFn。可以设置 startVal 和 endVal ，它会自动判断加计数或减计数。它支持vue-ssr。它是从 countUp.js 中学习的；">
  <md-keyboard  :endVal="520520520" ></md-keyboard>
  <highlight-code slot="highlight" lang="vue">
<<< @/docs/.vuepress/components/md/keyboard.vue
  </highlight-code>
</demo-block>


### Variables
参数|	说明|	类型	|可选值|	默认值
| --------  | ------- | :------: | :------: |--
keys	|键盘按钮|	Array	| -- | 键盘
type	|键盘类型|	String	|default/number	default
theme|	主题|	String|	default/green/dark/classic|	default


<vssure />