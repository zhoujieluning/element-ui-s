# text-ellipsis 溢出省略

<demo-block 
title="示例"
description="当文字太多时可以只展示部分，后面省略显示">
  <md-text-ellipsis  :endVal="520520520" ></md-text-ellipsis>
  <highlight-code slot="highlight" lang="vue">
<<< @/docs/.vuepress/components/md/text-ellipsis.vue
  </highlight-code>
</demo-block>


### Attributes
|参数|	说明|	类型	|可选值	|默认值|
| :--------:   | -----  | ----- | :--------:   | -----  |
text|	需要省略的文本|	String	-	-|
width	|限制的宽|	Number|	-	-|
height|	限制的高	|Number|	-	-|
is-limit-height|	是否开启限制|	Boolean	|-	true
use-tooltip|	是否使用tooltip	|Boolean|	-	false
placement|	tooltip的placement|	String|	-	
### Events
事件名|	说明	|参数
| :--------:   | ----- |---
show	|当isLimitHeight为true，文本全部展示的时候|	-
hide|	当isLimitHeight为true，文本省略的时候	|-

<start />