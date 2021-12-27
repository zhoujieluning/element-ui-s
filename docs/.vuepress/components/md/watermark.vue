<template>
  <div style="width: 400px">
    <el-button @click="submit" type="primary">全局水印</el-button>
    <el-button @click="submit1" type="primary">局部水印</el-button>
    <el-button @click="del" type="danger">删除水印</el-button>
    <br />
    <br />
    <div
      id="test"
      style="
        width: 300px;
        height: 300px;
        border: 1px solid #ccc;
        position: relative;
      "
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      obj: '',
      create: false,
    };
  },
  methods: {
    submit() {
      if (this.create) {
        this.$message.success('已经创建水印了');
        return;
      }
      this.create = true;
      this.$message.success('添加水印成功');
      this.obj = this.$Watermark({ text: 'element-ui-s全局水印' });
    },
    submit1() {
      this.$Watermark({
        id: 'test',
        fontSize: '14px',
        width: '100',
        height: '80',
        text: 'element-ui-s局部水印',
      });
    },
    del() {
      this.obj.remove();
      this.create = false;
    },
  },
};
</script>
