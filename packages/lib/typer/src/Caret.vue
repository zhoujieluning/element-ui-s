<template >
  <!-- span.caret.custom(:class='animationClass') -->
  <span class="caret custom" :class="animationClass"></span>
</template>

<script>
const ANIMATION_CLASS_PREFIX = 'vue-typer-caret-';

export default {
  props: {
    /**
     * Caret animation similar to Sublime and VSCode: 'solid', 'blink', 'smooth', 'phase', 'expand'.
     */
    animation: {
      type: String,
      default: 'blink',
      validator: (value) =>
        /^solid$|^blink$|^smooth$|^phase$|^expand$/.test(value),
    },
  },
  computed: {
    animationClass() {
      return ANIMATION_CLASS_PREFIX + this.animation;
    },
  },
};
</script>


