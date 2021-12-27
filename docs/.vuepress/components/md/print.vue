<template>
  <div>
    <el-button @click="printAll" type="success">全局打印</el-button>
    <el-button @click="print">局部打印</el-button>
    <div id="test">
      <h5 style="color: green; text-aligin: center">你看我是什么颜色</h5>
      <img src="../../public/logo.jpg" />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    printAll() {
      this.$Print('#app'); // 全局引入Vue.use(ElementUiS)
    },
    print() {
      this.$Print('#test');
    },
  },
};
</script>