# keyboard 打印

<demo-block 
title="示例"
description="模拟键盘，后续会增加键盘显示同步">
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


<start />