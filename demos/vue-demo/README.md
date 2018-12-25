# vue-demo

> 在 `Vue` 项目中使用 `sass-bem`

## 使用

1. 安装 `vue-cli`: `npm install -g @vue/cli`
2. 创建项目： `vue create vue-demo`
3. 安装 `node-sass` 、`sass-loader` 、`sass-resources-loader` 
4. 在项目根目录新建 `vue-config.js`

``` js

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


```

## Bash
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
