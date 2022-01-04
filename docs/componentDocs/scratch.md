# scratch 刮刮乐

<demo-block 
title="示例"
description="支持图片、视频、文件、地图等功能">
  <md-scratch  :endVal="520520520" ></md-scratch>
  <highlight-code slot="highlight" lang="vue">
<<< @/docs/.vuepress/components/md/scratch.vue
  </highlight-code>
</demo-block>


### Attributes
参数 | 说明 | 类型 | 可选值 |	默认值
| --  | -- | :--: | :--: | --
brushOptions | width：Defines the lineWidth attribute.<br>shape:Defines the lineJoin attribute. | 	Object	| -- | {width: 20, shape: 'round',}
hideOptions | color：可以是“颜色”或“图案”。如果您希望它成为一种模式，则应将其设置为“模式”。<br> src:图像的链接与color二选一。 <br> repeat:定义是否以及在哪个方向应该重复图像。可能的值为“repeat”、“no-repeat”、“repeat-x”和“repeat-y”。 |	Object	| -- | {color: '#dadada',repeat: 'repeat',}
getPercentageCleared | 是否有percentage-update事件 | Boolean |--  | false
percentageStride | 刮出百分比 |	Number	| -- | --

### Events
事件名|	说明	|参数
| :--------:   | ----- |---
percentage-update	|如果getPercentageCleared设置了标志，组件将发出此事件并传递一个根据已清除区域的百分比计算的数字。|	number

<start />
