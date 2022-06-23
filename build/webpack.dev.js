// 开发环境
const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const ESLintPlugin = require('eslint-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')
const base = require('./webpack.base')

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    // 定义全局变量
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_DEV: JSON.stringify('development'),
        },
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ESLintPlugin({
      fix: true, // 运行的时候自动帮你修复错误
    }),
    new StylelintWebpackPlugin({
      context: 'src',
      configFile: path.resolve(__dirname, '../stylelint.config.js'),
      files: ['**/*{css.scss}'],
    }),
  ],
  cache: true,
})
