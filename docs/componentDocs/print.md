# print

### 示例

<els-print />

### 代码

```html
<template>
  <div>
    <el-button @click="print">局部打印</el-button>
    <el-button @click="printAll">全局打印</el-button>
    <div>
      <h5 id="test" style="color: green">你看我是什么颜色</h5>
      <!-- <img src="../.vuepress/public/logo.jpg" />
      1 -->
    </div>
  </div>
</template>
<script>
  export default {
    name: 'els-print',
    methods: {
      printAll() {
        this.$Print('#app');
      },
      print() {
        this.$Print('#test');
      },
    },
  };
</script>
```

### Attributes

| 参数   | 说明     | 类型   | 必填  | 默认值 |
| ------ | -------- | ------ | ----- | ------ |
| width  | 卡片宽度 | Number | fasle | -      |
| heigth | 卡片宽度 | Number | fasle | -      |
| imgurl | 卡片宽度 | Number | fasle | -      |
| width  | 卡片宽度 | Number | fasle | -      |
