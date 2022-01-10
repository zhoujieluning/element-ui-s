# html-pdf 导出PDF


js实现PDF导出功能
::: demo 第二个参数支持html2canvas所有参数 （文档地址:`https://html2canvas.hertzen.com/configuration`）
```vue 
<template>
  <div id="html-pdf">
    <el-button @click="handlePdfAll" type="success">全部导出</el-button>
    <el-button @click="HandlePdf">按需导出</el-button>
    <h4>你来把html导出成pdf吧</h4>
  </div>
</template>

<script>
export default {
  methods: {
    handlePdfAll() {
      this.$HtmlPdf();
    },
    HandlePdf() {
      this.$HtmlPdf('#html-pdf', {
        backgroundColor: 'yellow',
        title: '我们是pdf文件',
      });
    },
  },
};
</script>
```
:::

<start />
<vssue />