# sass-bem

> 使用 sass 编写 bem 风格的css。

## 声明

该方案是 `element-ui` 框架中的，本人只是根据实践经验对此进行了一些修改。

## 推荐

+ `emmet`: [https://docs.emmet.io/filters/bem/](https://docs.emmet.io/filters/bem/)

## configs

> 自定义可参考 `sass` 变量声明语法。

| config              | 含义                   | 默认值 |
| ------------------- | ---------------------- | ------ |
| $namespace          | class 前缀（命名空间） | `app`  |
| $block-separator    | Block 分隔符           | `-`    |
| $element-separator  | Element 分隔符         | `--`   |
| $modifier-separator | Modifier 分隔符        | `__`   |
| $state-prefix       | 状态样式前缀           | `is-`  |


## mixins

| mixin         | 含义                |
| ------------- | ------------------- |
| b             | `BEM` 中的 Block    |
| e             | `BEM` 中的 Element  |
| m             | `BEM` 中的 Modifier |
| spec-selector | 用于自定义嵌套样式  |
| when          | 定义一个状态样式    |


## 使用

> 暂未计划发布到 `npm`，请先手动 clone 到本地使用。
### 手动引入

1. ~~~安装：`npm install sass-bem -D`~~~
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

1. ~~~安装：`npm install sass-bem -D`~~~
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

### vue 项目： [vue-demo](./demos/vue-demo)

### angular 项目 [angular-demo](./demos/ng-demo)