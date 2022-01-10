# nprogress 进度条

网页顶部虚拟进度，无需多余控制
:::demo只需调用start()和done()来控制进度条。
```vue
<template>
  <div>
    <el-button type="primary" @click="$Nprogress.start()">开始</el-button>
    <el-button type="danger" @click="$Nprogress.done()">停止</el-button>
    <el-button type="warning" @click="$Nprogress.remove()">删除</el-button>
  </div>
</template>
```
:::


<vssue />