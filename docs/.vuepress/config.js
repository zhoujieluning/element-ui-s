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
                collapsable: false, 
              },
              {
                title:'快速上手',
                path: 'guide/quick-start',
                collapsable: false, 
              },
              {
                title:'几点说明',
                path: 'guide/tips',
                collapsable: false, 
              },
              
            ]
          },
          {
            title:'文档',
            collapsable: false, 
            children:[
              {
                title:'form',
                path: 'form',
                collapsable: true, 
              },
              {
                title:'table',
                path: 'table',
                collapsable: false, 
              },
              {
                title:'print',
                path: 'print',
                collapsable: false, 
              },
              {
                title:'nprogress',
                path: 'nprogress',
                collapsable: false, 
              },
              {
                title:'chat',
                path: 'chat',
                collapsable: false, 
              },
              {
                title:'count-up',
                path: 'count-up',
                collapsable: false, 
              },
              {
                title:'text-ellipsis',
                path: 'text-ellipsis',
                collapsable: false, 
              },
              {
                title:'sign',
                path: 'sign',
                collapsable: false, 
              },
            ]
          }
        ],
        // '/componentDocs/':[
          
        // ]
      }
    }
  } 