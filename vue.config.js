const path = require('path')
module.exports = {
  pages: {
    index: {
      // 修改项目入口文件
      entry: 'examples/main.ts',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  devServer: {
    port: 9001
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve('examples'),
        '@packages': path.resolve('packages')
      }
    }
  }
}
