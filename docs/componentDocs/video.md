# video 视频

调取原生的摄像头调用开始函数和结束函数，停止后即可获取录制片段。注意同意浏览器调用摄像头
:::demo
```vue
<template>
  <div>
    <el-button @click="startRecord" v-if="!flag" type="primary"
      >开始录制</el-button
    >
    <el-button type="danger" @click="stopRecord" v-else>停止录制</el-button>
    <br /><br />
    <els-video
      background="https://github.com/ShuangDa1018/element-ui-s/raw/gh-pages/face.png"
      @data-change="dataChange"
      ref="video"
    ></els-video>
    <img src="" alt="" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    startRecord() {
      this.flag = true;
      this.$message.success('开始录制');
      this.$refs.video.startRecord();
    },
    stopRecord() {
      this.flag = false;
      this.$message.success('请看控制台视频文件的base64');
      this.$refs.video.stopRecord();
    },
    dataChange(data) {
      console.log(data);
    },
  },
};
</script>
```
:::


<vssue />