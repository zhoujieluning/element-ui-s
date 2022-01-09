# scratch 刮刮乐

支持图片、视频、文件、地图等功能
:::demo
```vue
<template>
  <els-scratch
    v-slot="{ init }"
    :brushOptions="brush"
    :hideOptions="hide"
    getPercentageCleared
    @percentage-update="updatePoints"
  >
    <div class="wrapper1">
      <img
        src="https://element.eleme.io/static/component.bd3411b.png"
        @load="init()"
      />
      <h3>{{ subline }}</h3>
    </div>
  </els-scratch>
</template>

<script>
export default {
  computed: {
    subline() {
      return this.percentage < 100
        ? `🎉 There is still ${
            100 - this.percentage
          }% left for me to be free... 🎉`
        : '💚 Thank you for scratching me free! 💚';
    },
  },
  data() {
    return {
      percentage: 0,
      hide: {
        src: require('/docs/.vuepress/public/cover.jpg'),
        repeat: 'repeat',
      },
      brush: {
        size: 60,
        shape: 'round',
      },
    };
  },
  methods: {
    updatePoints(percentage) {
      this.percentage = percentage;
    },
  },
};
</script>

<style>
.wrapper1 {
  width: 300px;
}
</style>
```
:::
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
