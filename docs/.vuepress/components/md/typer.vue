<template>
  <div>
    <els-typer
      class="typer-height"
      text="亲爱的双哥哥😘,到底多努力，才能得到你"
    ></els-typer>
    <els-typer
      class="typer-height"
      text="求求你滚动到最底部，点那个star⭐吧，"
      :shuffle="true"
      preTypeDelay="3000"
      preEraseDelay="6000"
    ></els-typer>
  </div>
</template>

<script>
export default {};
</script>

<style>
.typer-height {
  min-height: 1.5em;
}
</style>