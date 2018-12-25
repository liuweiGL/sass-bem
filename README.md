# sass-bem
> 使用 sass 编写 bem 风格的css。

## 声明

该方案是 `element-ui` 框架中的，本人只是根据实践经验对此进行了一些修改。

## 使用

### 手动引入

1. 安装：`npm install sass-bem -D`
2. 使用

```css
/* demo.scss */

@import 'sass-bem/index.scss';

@include b(demo){
  /* rules */
  @include e(tip){
      /* rules */
  }
  ...
}


```

### webpack

> 在任何一个 `sass` 文件中都可使用 `bem.scss` 中的 `mixin`

1. 安装：`npm install sass-bem -D`
2. 安装: `npm install sass-resources-loader -D`
3. 配置 `sass-resources-loader`:

```js

module.exports = {
  // ....
  module: {
    rules: [
      // ....
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                '~sass-bem/index.scss'
              ]
            }
          }
        ]
      }
    ],
  }
};

```

### 示例

1. [vue-demo](./demos/vue-demo)
2. [angular-demo](./demos/ng-demo)