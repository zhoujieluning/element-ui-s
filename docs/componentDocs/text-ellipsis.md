# text-ellipsis 溢出省略

当文字太多时可以只展示部分，后面省略显示
:::demo
```vue
<template>
  <els-text-ellipsis
    :text="text"
    :height="100"
    :width="300"
    :is-limit-height="isLimitHeight"
    @show="show"
    @hide="hide"
  >
    <el-tag slot="before" size="small">news</el-tag>
    <small slot="more"
      ><span>...</span
      ><span class="link" @click="isLimitHeight = false">查看更多</span></small
    >
    <small
      slot="after"
      class="link"
      v-if="!isLimitHeight"
      @click="isLimitHeight = true"
      >收起</small
    >
  </els-text-ellipsis>
</template>
<script>
export default {
  data() {
    return {
      text: '文档中el开头（<el-button>）即是element-ui的组件,文档中els(els-count-up)开头即是element-ui-s的组件。qq 群：814333454qq 群：814333454qq 群：814333454qq 群：814333454qq 群：814333454qq 群：814333454qq 群：814333454',
      isLimitHeight: true,
    };
  },
  methods: {
    show() {},
    hide() {},
  },
};
</script>
<style >
.link {
  color: red;
  cursor: pointer;
}
</style>

```
:::
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