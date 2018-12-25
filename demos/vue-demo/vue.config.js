const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('sass-resources-loader')
      .test(/\.scss$/)
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: [
          path.resolve(__dirname, './src/bem-config.scss'),
          path.resolve(__dirname, '../../index.scss'),
        ]
      })
      .end()
  }
}
