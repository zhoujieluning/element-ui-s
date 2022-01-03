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