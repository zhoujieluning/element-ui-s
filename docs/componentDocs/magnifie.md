# magnifie 放大镜


放大镜，适用于电商等平台放大细节
:::demo
```vue
<template>
  <div class="magnifie-container">
    <el-card shadow="hover">
      <div slot="header"><span>放大镜1</span></div>
      <els-magnifie
        url="https://github.com/ShuangDa1018/element-ui-s/raw/gh-pages/logo.jpg"
        type="circle"
      ></els-magnifie>
    </el-card>
    <el-card shadow="hover">
      <div slot="header"><span>放大镜2</span></div>
      <els-magnifie
        url="https://picsum.photos/960/540?random=2"
        type="square"
        :width="250"
      ></els-magnifie>
    </el-card>
  </div>
</template>


```
:::

<start />