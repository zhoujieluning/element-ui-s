(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{641:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{flag:!1}},methods:{startRecord:function(){this.flag=!0,this.$message.success("开始录制"),this.$refs.video.startRecord()},stopRecord:function(){this.flag=!1,this.$message.success("请看控制台视频文件的base64"),this.$refs.video.stopRecord()},dataChange:function(t){console.log(t)}}},n=s(6),o=Object(n.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.flag?s("el-button",{attrs:{type:"danger"},on:{click:t.stopRecord}},[t._v("停止录制")]):s("el-button",{attrs:{type:"primary"},on:{click:t.startRecord}},[t._v("开始录制")]),t._v(" "),s("br"),s("br"),t._v(" "),s("els-video",{ref:"video",attrs:{background:"https://github.com/ShuangDa1018/element-ui-s/raw/gh-pages/face.png"},on:{"data-change":t.dataChange}}),t._v(" "),s("img",{attrs:{src:"",alt:""}})],1)}),[],!1,null,null,null);e.default=o.exports}}]);