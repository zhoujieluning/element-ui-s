<template>
  <div>
    <el-dialog title="提示" v-dialogdrag :visible.sync="type0" width="40%">
      <span>这是一段信息</span>
      <span slot="footer">
        <el-button @click="type0 = false">取 消</el-button>
        <el-button @click="type0 = false" type="primary">确 定</el-button>
      </span>
    </el-dialog>
    <el-button @click="type0 = true" type="warning">显示弹框</el-button>
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