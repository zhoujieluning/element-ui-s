<template>
  <div>
    <div><els-sign ref="sign"></els-sign></div>
    <el-button type="primary" @click="handleSubmit">生成</el-button>
    <el-button type="danger" @click="getStar">图章</el-button>
    <el-button @click="$refs.sign.clear()">清空</el-button>
    <div>
      <br />
      生成图片
      <img v-if="img" :src="img" alt="" width="80" height="50" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: '',
    };
  },
  methods: {
    handleSubmit() {
      this.img = this.$refs.sign.submit(80, 50);
    },
    getStar() {
      this.$refs.sign.getStar('这里是用途', '这里是单位的名称', '123456');
    },
  },
};
</script>