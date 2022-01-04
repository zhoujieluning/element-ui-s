<template>
  <els-scratch
    v-slot="{ init }"
    :brushOptions="brush"
    :hideOptions="hide"
    getPercentageCleared
    @percentage-update="updatePoints"
  >
    <div class="wrapper1">
      <img
        src="https://github.com/ShuangDa1018/element-ui-s/raw/gh-pages/logo.jpg"
        @load="init()"
      />
      <h3>{{ subline }}</h3>
    </div>
  </els-scratch>
</template>

<script>
import paperPattern from '/docs/.vuepress/public/cover.jpg';
export default {
  computed: {
    subline() {
      return this.percentage < 100
        ? `🎉 There is still ${
            100 - this.percentage
          }% left for me to be free... 🎉`
        : '💚 Thank you for scratching me free! 💚';
    },
  },
  data() {
    return {
      percentage: 0,
      hide: {
        src: paperPattern,
        repeat: 'repeat',
      },
      brush: {
        size: 60,
        shape: 'round',
      },
    };
  },
  methods: {
    updatePoints(percentage) {
      this.percentage = percentage;
    },
  },
};
</script>

<style>
.wrapper1 {
  width: 300px;
}
</style>