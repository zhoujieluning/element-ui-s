<template>
  <div>
    <el-button @click="print">局部打印</el-button>
    <el-button @click="printAll">全局打印</el-button>
    <h1 id="test" style="color: green">你看我是什么颜色</h1>
  </div>
</template>
<script>
export default {
  name: "els-print",
  methods: {
    printAll() {
      this.$Print("#app");
    },
    print() {
      this.$Print("#test");
    },
  },
};
</script>