# typer 打字效果

模拟用户键入、选择和删除文本的Vue组件。
:::demo
```vue
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
```
:::

### Attributes
参数 | 说明 | 类型 | 可选值 |	默认值
| --  | -- | :--: | :--: | --
text | 值 |	String  Array	| - | -
repeat | 循环次数 |	Number	| - | Infinity
shuffle | 随机 | Boolean | - | fasle
initialAction | 初始作用 | String | typing/erasing | typing
preTypeDelay | 预打字延迟 | Number | - | 70
typeDelay | 打字延迟 | Number | - | 70
preEraseDelay | 显示值的时间 | Number | - | 2000
eraseDelay | 擦除后显示空白的时间 | Number | - | 250
eraseStyle | 橡皮擦风格 <br/>backspace 一次擦除一个字符，模拟退格键。<br/> select-back 一次向后突出显示一个字符，模拟 Shift+LeftArrow，并在所有字符突出显示后擦除所有内容。<br/>select-all 立即立即突出显示所有字符，模拟 Ctrl/Cmd+A，然后擦除所有字符。<br/>clear立即立即擦除所有字符；输入的字符串就会消失。| String | backspace/select-back/select-all/clear | select-all
eraseOnComplete | 没有完成 | Boolean | - | fasle
caretAnimation | 创建动画 | String | solid/blink/smooth/phase/expand | blink

### Events
事件名称 | 说明 | 回调参数
| - | - | - | -
typed | 打字 | typedString:String
typed-char | 类型化字符 | typedChar:String,typedCharIndex:Number
erased | 抹去 | erasedString:String
completed | 完整的 | 

<start />