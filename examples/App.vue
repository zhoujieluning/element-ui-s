<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <Demo /> -->
    <button @click="handlePrint">全局print</button>
    <button @click="handlePrint">局部print</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    handlePrint() {
      console.log(this.$Print);
      this.$Print("#app");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
