<template>
  <div :class="b()" :style="styleName">
    <div :class="b('border')">
      <span :style="borderStyleName"></span>
      <span :style="borderStyleName"></span>
      <span :style="borderStyleName"></span>
      <span :style="borderStyleName"></span>
    </div>
    <img :style="imgStyleName" :class="b('img')" :src="background" />
    <video :class="b('main')" ref="main" autoplay muted></video>
  </div>
</template>

<script>
import RecordVideo from './video';
export default {
  name: 'els-video',
  props: {
    background: {
      type: String,
    },
    width: {
      type: [String, Number],
      default: 500,
    },
  },
  computed: {
    styleName() {
      return {
        width: this.setPx(this.width),
      };
    },
    imgStyleName() {
      console.log(this.setPx(this.width / 2));
      return {
        width: this.setPx(this.width / 2),
      };
    },
    borderStyleName() {
      return {
        width: this.setPx(this.width / 15),
        height: this.setPx(this.width / 15),
        borderWidth: this.setPx(5),
      };
    },
  },
  data() {
    return {
      videoObj: null,
    };
  },
  mounted() {
    console.log(this.width);
    this.init();
  },
  methods: {
    init() {
      this.videoObj = new RecordVideo(this.$refs.main);
      const videoPromise = this.videoObj.init();
      videoPromise.then(() => {
        this.videoObj.mediaRecorder.addEventListener(
          'stop',
          this.getData,
          false
        );
      });
    },
    startRecord() {
      this.videoObj.startRecord();
    },
    stopRecord() {
      this.videoObj.stopRecord();
    },
    getData() {
      const blob = new Blob(this.videoObj.chunks, {
        type: 'video/mp4',
      });
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.addEventListener('loadend', () => {
        var video_base64 = reader.result;
        this.$emit('data-change', video_base64);
      });
    },
    setPx(val) {
      val = val + '';
      if (val.indexOf('%') === -1) {
        val = val + 'px';
      }
      return val;
    },
    b(el, mods) {
      const { name } = this.$options;
      if (el && typeof el !== 'string') {
        mods = el;
        el = '';
      }
      const ELEMENT = '__';
      const MODS = '--';
      const join = (name, el, symbol) => (el ? name + symbol + el : name);
      const prefix = (name, mods) => {
        if (typeof mods === 'string') {
          return join(name, mods, MODS);
        }
        if (Array.isArray(mods)) {
          return mods.map((item) => prefix(name, item));
        }
        const ret = {};
        Object.keys(mods || {}).forEach((key) => {
          ret[name + MODS + key] = mods[key];
        });
        return ret;
      };
      el = join(name, el, ELEMENT);
      return mods ? [el, prefix(el, mods)] : el;
    },
  },
};
</script>

