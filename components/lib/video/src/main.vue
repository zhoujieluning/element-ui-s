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
<style lang="scss" scoped>
.els-video {
  position: relative;
  overflow: hidden;
  width: 500px;
}
.els-video__border span {
  position: absolute;
  width: 30px;
  height: 30px;
  border-width: 4px;
  color: #0073eb;
  border-style: solid;
}
.els-video__border span:nth-child(1) {
  left: 15px;
  top: 15px;
  border-right: 0;
  border-bottom: 0;
}
.els-video__border span:nth-child(2) {
  right: 15px;
  top: 15px;
  border-left: 0;
  border-bottom: 0;
}
.els-video__border span:nth-child(3) {
  bottom: 15px;
  left: 15px;
  border-right: 0;
  border-top: 0;
}
.els-video__border span:nth-child(4) {
  bottom: 15px;
  right: 15px;
  border-left: 0;
  border-top: 0;
}
.els-video__img {
  //   width: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.els-video__main {
  width: 100%;
}
</style>
