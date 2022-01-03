# qrcode 二维码

<demo-block 
title="示例"
description="使用画布生成二维码的纯 JavaScript 库封装的vue组件">
  <md-qrcode  :endVal="520520520" ></md-qrcode>
  <highlight-code slot="highlight" lang="vue">
<<< @/docs/.vuepress/components/md/qrcode.vue
  </highlight-code>
</demo-block>


### Attributes
参数|	说明|	类型	|可选值|	默认值
| --------  | ------- | :------: | :------: |--
value	|值|	String	| -- | 
foreground	|前景色|	String|--	|black
background|	背景色|	String|	--|	white
level|	纠错等级|	String|	L、M、Q、H|	L
mime|	主题|	String|	--|	image/png
padding|	主题|	Number|	--|	null
foregroundAlpha|	前景色Alpha|	Number|	--|	1.0
backgroundAlpha|	背景色Alpha|	Number|	--|	1.0
size|	大小 |	Number|	--|	100

<start />
<vssue/>
