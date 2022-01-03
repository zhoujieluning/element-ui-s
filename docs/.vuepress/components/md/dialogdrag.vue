<template>
  <div>
    <el-dialog
      title="现在可以点这里拖动了"
      v-dialogdrag
      :visible.sync="type0"
      width="40%"
    >
      <span>亲爱的双哥哥😘,到底多努力，才能得到你</span>
      <span slot="footer">
        <el-button @click="type0 = false">取 消</el-button>
        <el-button @click="type0 = false" type="primary">确 定</el-button>
      </span>
    </el-dialog>
    <el-button @click="type0 = true" type="warning"
      >显示element-ui弹框</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      type0: false,
    };
  },
};
</script>