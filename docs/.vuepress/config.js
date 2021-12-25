// .vuepress/config.js
module.exports = {
  base:'/element-ui-s/',
  title:'element-ui-s',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Github', link: 'https://github.com/ShuangDa1018/element-ui-s' },
            { text: 'Npm', link: 'https://www.npmjs.com/package/element-ui-s' },
          ],
      sidebar: [
        '/',
        '/componentDocs/els-form',
        '/componentDocs/els-table',
      ]
    }
  } 