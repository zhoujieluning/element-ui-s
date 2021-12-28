# count-up 数字动画
<!-- 说明： -->
<!-- demo-block 组件即为.vuepress/components/base/codeBox文件，vuepress会默认把它b析为`demo-block`组件;  title为代码示例标题；description为代码示例说明；onlineLink为在线运行配置的网址 -->
<!-- highlight-code为引入的第三方代码高亮组件，里面包裹的就是上面示例组件的代码 -->

<demo-block 
title="示例"
 description="md-count-up是一个无依赖的轻量级 vue 组件，可以自己覆盖 easingFn。可以设置 startVal 和 endVal ，它会自动判断加计数或减计数。它支持vue-ssr。它是从 countUp.js 中学习的；">
  <md-count-up  :endVal="520520520" ></md-count-up>
  <highlight-code slot="highlight" lang="vue">
    <template>
<<< @/docs/.vuepress/components/md/count-up.vue
    </template>
  </highlight-code>
</demo-block>

### Options
|    参数    |    说明   |   类型   |	默认值	|
| -----------------  | ---------------- | :--------: | :----------: |
| startVal       | the value you want to begin at |Number| 0 |
| endVal         | the value you want to arrive at |Number | 1018 |
| duration  | duration in millisecond | Number | 3000 |
| autoplay     | when mounted autoplay | Boolean | true |
| decimals     | the number of decimal places to show | Number | 0 |
| decimal     | the split decimal | String | . |
| separator     | the separator | String | , |
| prefix     | the prefix | String | '' |
| suffix     | the suffix | String | '' |
| useEasing     | is use easing function | Boolean | true |
| easingFn     | the easing function | Function | — |

** notes: when autoplay:true , it will auto start when startVal or endVal change **


### Functions
| 方法名 | 说明   |
| :--------:   | -----  |
|    mountedCallback    |  when mounted will emit  mountedCallback  |
|    start    |  start the countTo  |
|    pause   |  pause  the countTo |
|    reset    |  reset  the countTo |

<start/>