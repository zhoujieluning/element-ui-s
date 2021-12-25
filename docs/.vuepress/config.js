// .vuepress/config.js
module.exports = {
  base:'/element-uis/',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'External', link: 'https://google.com' },
          ],
      sidebar: [
        '/',
        '/componentDocs/els-form',
        '/componentDocs/els-table',
      ]
    }
  } 