# nprogress 进度条

网页顶部进度条，只需调用start()和done()来控制进度条。
:::demo
```vue
<template>
  <div>
    <el-button type="primary" @click="$Nprogress.start()">开始</el-button>
    <el-button type="danger" @click="$Nprogress.done()">停止</el-button>
    <el-button type="warning" @click="$Nprogress.remove()">删除</el-button>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$Nprogress.done(); // 正常使用，不用加
  },
};
</script>
```
:::


<vssue />