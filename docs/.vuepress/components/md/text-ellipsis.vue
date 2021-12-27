<template>
  <els-text-ellipsis
    :text="text"
    :height="100"
    :width="200"
    :is-limit-height="isLimitHeight"
    @show="show"
    @hide="hide"
  >
    <el-tag slot="before" size="small">new</el-tag>
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
      text: '《华盛顿自由灯塔报》几天前报道称，美国国防部官员透露中国近日进行第十次东风-41洲际导弹的试射活动,这次试射中东风-41导弹投射了多个弹头并成功命中中国西部靶场目标。qq群qq群qq群qq群qq群qq群qq群qq群',
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
