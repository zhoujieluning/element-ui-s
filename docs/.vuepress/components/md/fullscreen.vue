<template>
  <div>
    <i
      @click="handleFull(isfullscreen)"
      :class="[isfullscreen ? 'el-icon-rank' : 'el-icon-full-screen', 'icon']"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isfullscreen: false,
    };
  },
  methods: {
    handleFull(is) {
      this.$Fullscreen(is);
      this.isfullscreen = !this.isfullscreen;
    },
  },
};
</script>

<style>
.icon {
  font-size: 30px;
}
</style>