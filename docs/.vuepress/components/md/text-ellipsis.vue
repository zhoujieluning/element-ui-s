<template>
  <els-text-ellipsis
    :text="text"
    :height="100"
    :width="300"
    :is-limit-height="isLimitHeight"
    @show="show"
    @hide="hide"
  >
    <el-tag slot="before" size="small">news</el-tag>
    <small slot="more"
      ><span>...</span
      ><span class="link" @click="isLimitHeight = false">查看更多</span></small
    >
    <small
      slot="after"
      class="link"
      v-if="!isLimitHeight"
      @click="isLimitHeight = true"
      >收起</small
    >
  </els-text-ellipsis>
</template>
<script>
export default {
  data() {
    return {
      text: '文档中el开头（<el-button>）即是element-ui的组件,文档中els(els-count-up)开头即是element-ui-s的组件。qq 群：814333454qq 群：814333454qq 群：814333454qq 群：814333454qq 群：814333454qq 群：814333454qq 群：814333454',
      isLimitHeight: true,
    };
  },
  methods: {
    show() {},
    hide() {},
  },
};
</script>
<style >
.link {
  color: red;
  cursor: pointer;
}
</style>
