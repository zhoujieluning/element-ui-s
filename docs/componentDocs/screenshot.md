# screenshot 截图

一件截图轻松完成上传
:::demo
```vue
<template>
  <div>
    <el-button @click="handleOk" type="primary" icon="el-icon-camera"
      >意见反馈</el-button
    >
    <el-dialog
      modal-append-to-body
      append-to-body
      title="意见反馈"
      top="50px"
      :visible.sync="box"
      width="60%"
    >
      <el-input
        type="textarea"
        placeholder="请告诉我们遇到的问题或建议"
        v-model="form.text"
      ></el-input>
      <br />
      <br />
      <div v-loading="flag" element-loading-text="正在截取屏幕数据">
        <img :src="form.img" width="100%" />
      </div>
      <span slot="footer">
        <el-button type="primary" icon="el-icon-check" @click="handleSubmit"
          >提 交</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      box: false,
      form: {
        img: '',
        text: '',
      },
    };
  },
  computed: {
    flag() {
      return !this.form.img;
    },
  },
  methods: {
    handleOk() {
      this.form = {
        img: '',
        text: '',
      };
      this.$Screenshot(document.querySelector('#app')).then((canvas) => {
        this.form.img = canvas.toDataURL('image/jpeg', 0.8);
      });
      this.box = true;
    },
    handleSubmit() {},
  },
};
</script>
```
:::


<start />
<vssue/>
