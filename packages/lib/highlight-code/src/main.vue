<script>
import { h } from 'vue';
import hljs from 'highlight.js/lib/core';
export default {
  name: 'els-highlight-code',
  render() {
    return h('pre', {}, [
      h('code', {
        class: this.className,
        innerHTML: this.highlightedCode,
      }),
    ]);
  },
  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      default: '',
    },
    autodetect1: {
      type: Boolean,
      default: true,
    },
    ignoreIllegals: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    autodetect() {
      return this.autodetect1 || !this.language;
    },
    cannotDetectLanguage() {
      return !this.autodetect && !hljs.getLanguage(this.language);
    },
    className() {
      if (this.cannotDetectLanguage) return '';
      else {
        return `hljs ${this.language}`;
      }
    },
    highlightedCode() {
      if (this.annotDetectLanguage) {
        console.warn(
          `The language "${this.language}" you specified could not be found.`
        );
        return this.escapeHtml(this.code);
      }

      if (this.autodetect.value) {
        const result = hljs.highlightAuto(this.code);
        // this.language = result.language || '';
        return result.value;
      } else {
        const result = hljs.highlight(this.code, {
          language: this.language,
          ignoreIllegals: this.ignoreIllegals,
        });
        return result.value;
      }
    },
  },
  methods: {
    escapeHtml(value) {
      return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
    },
  },
};
</script>
