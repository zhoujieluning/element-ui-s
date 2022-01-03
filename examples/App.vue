<template>
  <div id="app">
    <div class="highlight">
      <div class="code">
        data() { return { highlightedCode1: '', highlightedCode: '', }; },
      </div>
      <div class="code">
        data() { return { highlightedCode1: '', highlightedCode: '', }; },
      </div>
    </div>
  </div>
</template>

<script>
// import highlight from 'highlight.js';
import 'highlight.js/styles/vs2015.css';
export default {
  name: 'App',
  data() {
    return {
      highlightedCode1: '',
      highlightedCode: '',
    };
  },
  methods: {
    handlePrint() {
      this.$Print('#app');
    },
  },
  mounted() {
    const hljs = require('highlight.js/lib/common');
    this.highlightedCode = hljs.highlightAuto(
      '<span>Hello World!</span>'
    ).value;
    const hljs1 = require('highlight.js/lib/core');
    hljs1.registerLanguage('xml', require('highlight.js/lib/languages/xml'));

    this.highlightedCode1 = hljs1.highlight(
      '<span>Hello World!</span><span>Hello World!</span><span>Hello World!</span><span>Hello World!</span>',
      {
        language: 'html',
      }
    ).value;
    console.log(this.highlightedCode1);
    document.querySelectorAll('div.code').forEach((el) => {
      // then highlight each
      hljs.highlightElement(el);
    });
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
div.code {
  white-space: pre;
  padding: 20px;
}
span {
  display: inline-block;
}
.highlight {
  padding: 20px;
}
</style>
