module.exports = {
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: '组件库',
    },
  },
    configureWebpack:{
        resolve:{
            alias:{
            },
            extensions:['.vue','.js','.css','.scss']
        }
    }
};
