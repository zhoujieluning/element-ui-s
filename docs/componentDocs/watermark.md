# watermark 水印

给网页打上水印
:::demo
```vue
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

```
:::
### Options
|    参数    |    说明   |   类型   |	默认值	|
| --------  | ------- | :------: | :------: |
| text       | 文字内容 |String| element-ui-s商用通用无敌大水印 |
| fontSize         | 字体大小 |String | 30px |
| fontStyle  | 字体类型 | String | 黑体 |
| width     | 字体的宽度 | String |200
| height     | 字体的高度 | String | 400 |
| color     | 字体颜色 | String | rgba(100,100,100,0.15) |
| degree     | 文本旋转角度 | String | -20 |

<vssue />