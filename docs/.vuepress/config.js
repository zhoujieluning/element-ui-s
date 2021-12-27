// .vuepress/config.js
module.exports = {
  base:'/element-ui-s/',
  title:'element-ui-s',
  description: '开箱即用的组件库文档', //描述
    port: 1080, 
    head: [
      ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: 'Github地址', link: 'https://github.com/ShuangDa1018/element-ui-s' },
            { text: 'Npm地址', link: 'https://www.npmjs.com/package/element-ui-s' },
          ],
      sidebar: {
        '/componentDocs/':[
          {
            title:'使用说明',
            collapsable: false,
            children: [
              {
                title:'简介',
                path: 'guide/introduction',
              },
              {
                title:'快速上手',
                path: 'guide/quick-start',
              },
              {
                title:'几点说明',
                path: 'guide/tips',
              },
              
            ]
          },
          {
            title:'文档',
            collapsable: true,
            children:[
              {
                title:'form 表单',
                path: 'form',
                collapsable: true, },
              {title:'table 表格',path: 'table',},
              {title:'print 打印',path: 'print',},
              {title:'nprogress 进度条',path: 'nprogress',},
              {title:'chat 客服聊天',path: 'chat',},
              {title:'count-up 数字动画',path: 'count-up',},
              {title:'text-ellipsis 超出文本省略',path: 'text-ellipsis',},
              {title:'sign 电子签名',path: 'sign',},
              {title:'video 摄像头',path: 'video',},
              {title:'watermark 水印',path: 'watermark',},
              {title:'screen-shot 截图',path: 'screenshot',},
            ]
          }
        ],
        // '/componentDocs/':[
          
        // ]
      }
    }
  } 