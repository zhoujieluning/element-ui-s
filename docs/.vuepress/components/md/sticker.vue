<template>
  <div>
    <els-sticker :d="300" className="good"> </els-sticker>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.good {
  &__wrapper {
    &:focus {
      box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.4);
    }
  }
  &__main-image {
    background: url('https://github.com/ShuangDa1018/element-ui-s/raw/gh-pages/logo.jpg')
      no-repeat center;
    background-size: 300px;
  }
  &__backside-image {
    background: url('https://github.com/ShuangDa1018/element-ui-s/raw/gh-pages/logo.jpg')
      no-repeat center;
    background-size: 300px;
    background-color: lighgray;
    opacity: 0.4;
  }
}
</style>