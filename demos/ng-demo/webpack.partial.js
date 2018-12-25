const path = require('path')
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, './src/bem-config.scss'),
                path.resolve(__dirname, '../../index.scss')
              ]
            }
          }
        ]
      }
    ],
  }
};
