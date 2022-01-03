<template >
  <!-- span.char(:class="classes")
  | {{ val }} -->
  <span class="char" :class="classes">{{ val }}</span>
</template>

<script>
export default {
  props: {
    val: {
      type: String,
      default: '',
    },
  },
  computed: {
    classes() {
      return {
        newline: this.val.indexOf('\n') === 0,
      };
    },
  },
};
</script>
