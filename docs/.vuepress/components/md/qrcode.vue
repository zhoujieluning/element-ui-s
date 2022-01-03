<template>
  <div>
    <els-qrcode :value="value" :size="300"></els-qrcode>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '我是一个二维码',
    };
  },
};
</script>