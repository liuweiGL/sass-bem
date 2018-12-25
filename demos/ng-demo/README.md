# ng-demo

> 在 `angular` 项目中使用 `sass-bem`

## 使用

1. 安装 `ngx-build-plus` : `ng add ngx-build-plus`
2. 安装  `sass-resources-loader`: `npm install sass-resources-loader -D`
2. 新建一个自定义的 `webpack` 配置文件：`webpack.partial.js`

```js

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
                path.resolve(__dirname, '../../index.scss')
              ]
            }
          }
        ]
      }
    ],
  }
};

```

3. 更新 package.json

``` json

{
  "scripts": {
    "start": "ng serve --extra-webpack-config webpack.partial.js"
  }
}

```

4. 修改 `main.ts` 

```ts

platformBrowserDynamic().bootstrapModule(AppModule, {
    // 使用 BEM 不需要 css module
    defaultEncapsulation: ViewEncapsulation.None
})



```